import { Translate } from '~/components'

import styles from './styles.css'

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="l-container">
        <div className="l-row">
          <ul>
            <li>
              <time>May, 2018</time>
              <p className="event">
                <Translate
                  zh_hant="Prototype 上線"
                  zh_hans="Prototype 上线"
                  en="Launched the First Prototype"
                />
              </p>
            </li>

            <li>
              <time>Oct, 2018</time>
              <p className="event">
                <Translate
                  zh_hant="所有文章上載到 IPFS"
                  zh_hans="所有文章上载到 IPFS"
                  en="Content storage with IPFS"
                />
              </p>
            </li>

            <li>
              <time>Jun, 2019</time>
              <p className="event">
                <Translate
                  zh_hant="Matters 開放註冊"
                  zh_hans="Matters 开放注册"
                  en="Public Registration"
                />
              </p>
            </li>

            <li>
              <time>Oct, 2019</time>
              <p className="event">
                <Translate
                  zh_hant="接入 LikeCoin"
                  zh_hans="接入 LikeCoin"
                  en="Integration of LikeCoin"
                />
              </p>
            </li>
            <li>
              <time>May, 2020</time>
              <p className="event">
                <Translate
                  zh_hant="Matters Pay 上線"
                  zh_hans="Matters Pay 上线"
                  en="Matters Pay is now available"
                />
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <time>Mar, 2021</time>
              <p className="event">
                <Translate
                  zh_hant="圍爐功能上線"
                  zh_hans="围炉功能上线"
                  en="Matters Circle is now available"
                />
              </p>
            </li>

            <li>
              <time>Dec, 2021</time>
              <p className="event">
                <Translate
                  zh_hant="Matters 接入NFT- Travegloggers "
                  zh_hans="Matters 接入NFT- Travegloggers "
                  en="Travegloggers NFT on Matters.News"
                />
              </p>
            </li>

            <li>
              <time>Jan, 2022</time>
              <p className="event">
                <Translate
                  zh_hant="支持以太坊錢包登入"
                  zh_hans="支持以太坊钱包登入"
                  en="Support ETH Wallet Log In"
                />
              </p>
            </li>

            <li>
              <time>Jul, 2022</time>
              <p className="event">
                <Translate
                  zh_hant="開放內容註冊 ISCN"
                  zh_hans="开放内容注册 ISCN"
                  en="Matters.News on ISCN registry, ISCN Integration for all content"
                />
              </p>
            </li>

            <li>
              <time className="coming-time">Soon, 2022</time>
              <p className="event coming-event">
                <Translate
                  zh_hant="多元加密貨幣交易上線"
                  zh_hans="多元加密货币交易上线"
                  en="Support with fiat/crypto currencies"
                />
              </p>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{styles}</style>
    </section>
  )
}

export default Timeline
