import { expect, Locator, Page } from '@playwright/test'
import _sample from 'lodash/sample'
import _uniq from 'lodash/uniq'

import { TEST_ID } from '~/common/enums'

import { waitForAPIResponse } from '../api'
import {
  generateContent,
  generateSummary,
  generateSupportSetting,
  generateTags,
  generateTitle,
} from '../text'
import { pageGoto } from '../utils'

type License = 'CC BY-NC-ND 2.0 License' | 'CC0 License' | 'All Rights Reserved'

export class DraftDetailPage {
  readonly page: Page
  readonly isMobile: boolean | undefined

  // header
  readonly publishButton: Locator

  // bar
  readonly barAddTag: Locator
  readonly barSetCover: Locator
  readonly barCollectArticle: Locator
  readonly barToggleAddToCircle: Locator
  readonly barToggleISCN: Locator
  readonly barSetLicense: Locator
  readonly barSupportSetting: Locator

  // bottombar
  readonly bottombarManage: Locator

  // editing
  readonly titleInput: Locator
  readonly summaryInput: Locator
  readonly contentInput: Locator

  // dialog
  readonly dialog: Locator
  readonly dialogPublishNowButton: Locator
  readonly dialogPublishButton: Locator
  readonly dialogViewArticleButton: Locator
  readonly dialogSaveButton: Locator
  readonly dialogDoneButton: Locator

  constructor(page: Page, isMobile?: boolean) {
    this.page = page
    this.isMobile = isMobile

    // header
    this.publishButton = this.page.getByRole('button', { name: 'Publish' })

    // bar
    this.barAddTag = this.page.getByRole('button', {
      name: isMobile ? 'Tag' : 'Add Tag',
    })
    this.barSetCover = this.page.getByRole('button', {
      name: isMobile ? 'Cover' : 'Set Cover',
    })
    this.barCollectArticle = this.page.getByRole('button', {
      name: isMobile ? 'Collect' : 'Collect Article',
    })
    this.barToggleAddToCircle = this.page.getByLabel('Add to Circle')
    this.barToggleISCN = this.page.getByLabel('Register for ISCN')
    this.barSetLicense = this.page.getByRole('button', {
      name: 'CC BY-NC-ND 2.0 License',
    })
    this.barSupportSetting = this.page.getByRole('button', {
      name: 'Support Setting',
    })

    // bottombar
    this.bottombarManage = this.page.getByRole('button', {
      name: 'Article Management',
    })

    // editing
    this.titleInput = this.page.getByPlaceholder('Enter title')
    this.summaryInput = this.page.getByPlaceholder('Enter summary')
    this.contentInput = this.page.locator('.ql-editor')

    // dialog
    this.dialog = this.page.getByRole('dialog')
    this.dialogPublishNowButton = this.dialog.getByRole('button', {
      name: 'Publish Now',
    })
    this.dialogPublishButton = this.dialog.getByRole('button', {
      name: 'Publish',
    })
    this.dialogViewArticleButton = this.dialog.getByRole('button', {
      name: 'View Article',
    })
    this.dialogSaveButton = this.dialog.getByRole('button', {
      name: 'Save',
    })
    this.dialogDoneButton = this.dialog.getByRole('button', {
      name: 'Done',
    })
  }

  async createDraft() {
    await pageGoto(this.page, '/')

    // Promise.all prevents a race condition between clicking and waiting.
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.getByRole('button', { name: 'Create' }).click(),
    ])
    await expect(this.page).toHaveURL(/\/me\/drafts\/.*-.*/)
  }

  async gotoLatestDraft() {
    await this.page.goto('/me/drafts')

    // Promise.all prevents a race condition between clicking and waiting.
    await Promise.all([
      this.page.getByRole('listitem').first().click(),
      this.page.waitForNavigation(),
    ])
  }

  async fillTitle() {
    const title = generateTitle()
    await this.titleInput.fill(title)
    return title
  }

  async fillSummary() {
    const summary = generateSummary()
    await this.summaryInput.fill(summary)
    return summary
  }

  async fillContent() {
    const content = generateContent({})
    await this.contentInput.fill(content)
    return content
  }

  async setTags() {
    await this.barAddTag.click()

    const tags = _uniq(generateTags({ count: 3 }))
    for (const tag of tags) {
      await this.page.getByPlaceholder('Search tags...').fill(tag)
      await this.page.getByTestId(TEST_ID.SEARCH_RESULTS_ITEM).first().click()
    }

    await this.dialogSaveButton.click()

    return tags
  }

  async setCover() {
    await this.barSetCover.click()

    await this.page
      .getByLabel('Upload Cover')
      .setInputFiles('./tests/helpers/assets/320x180.jpg')

    await waitForAPIResponse({
      page: this.page,
      path: 'data.node.assets',
    })

    await this.dialogSaveButton.click()

    return true
  }

  async setSupportSetting({
    replyToDonator,
    requestForDonation,
  }: {
    replyToDonator?: boolean
    requestForDonation?: boolean
  }) {
    if (this.isMobile) {
      await this.bottombarManage.click()
    }

    await this.barSupportSetting.click()

    replyToDonator =
      typeof replyToDonator === 'boolean'
        ? replyToDonator
        : _sample([true, false])
    requestForDonation =
      typeof requestForDonation === 'boolean'
        ? requestForDonation
        : _sample([true, false])

    let replyToDonatorText = ''
    let requestForDonationText = ''

    if (replyToDonator) {
      replyToDonatorText = generateSupportSetting()
      await this.page.getByRole('button', { name: 'Thank-you card' }).click()
      await this.page.getByLabel('Thank-you card').fill(replyToDonatorText)
    }

    if (requestForDonation) {
      requestForDonationText = generateSupportSetting()
      await this.page.getByRole('button', { name: 'Call-to-Support' }).click()
      await this.page.getByLabel('Call-to-Support').fill(requestForDonationText)
    }

    await this.dialogSaveButton.click()

    return { replyToDonatorText, requestForDonationText }
  }

  async setCollection() {
    await this.barCollectArticle.click()

    // type and search
    const searchKey = 'test'
    await this.page.getByPlaceholder('Search articles...').fill(searchKey)

    await waitForAPIResponse({
      page: this.page,
      path: 'data.search.edges',
    })

    // select first search result
    let articleTitle = ''
    const searchResults = this.page.getByTestId(TEST_ID.SEARCH_RESULTS_ITEM)
    if ((await searchResults.count()) >= 1) {
      const title = await searchResults.first().getByRole('heading').innerText()
      await searchResults.first().click()
      articleTitle = title
    }

    // save
    await this.dialogSaveButton.click()

    return articleTitle
  }

  async checkAddToCicle() {
    if (this.isMobile) {
      await this.bottombarManage.click()
    }

    const hasAddToCircle = await this.barToggleAddToCircle.isVisible()
    if (!hasAddToCircle) {
      if (this.isMobile) {
        await this.dialogDoneButton.click()
      }
      return
    }

    // FIXME: error will be throw if using .check()
    // https://github.com/microsoft/playwright/issues/13470
    await Promise.all([
      waitForAPIResponse({
        page: this.page,
        path: 'data.putDraft.access.circle',
      }),
      this.barToggleAddToCircle.click(),
    ])

    if (this.isMobile) {
      await this.dialogDoneButton.click()
    }

    return true
  }

  async checkISCN() {
    if (this.isMobile) {
      await this.bottombarManage.click()
    }

    // FIXME: error will be throw if using .check()
    // https://github.com/microsoft/playwright/issues/13470
    await this.barToggleISCN.click()

    await waitForAPIResponse({
      page: this.page,
      path: 'data.putDraft.iscnPublish',
    })

    if (this.isMobile) {
      await this.dialogDoneButton.click()
    }

    return true
  }

  async setLicense({ license }: { license?: License }) {
    license =
      license ||
      _sample(['CC BY-NC-ND 2.0 License', 'CC0 License', 'All Rights Reserved'])

    if (this.isMobile) {
      await this.bottombarManage.click()
    }

    await this.barSetLicense.click()
    await this.page.getByRole('option', { name: license }).click()

    if (this.isMobile) {
      await this.dialogDoneButton.click()
    }

    return license
  }

  async publish() {
    await this.publishButton.click()
    await this.dialogPublishNowButton.click()
    await this.dialogPublishButton.click()
    await expect(this.dialogViewArticleButton).toBeVisible()
  }
}
