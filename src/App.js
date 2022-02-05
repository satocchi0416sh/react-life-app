import React, { useRef } from 'react';
import ApplicationHome from './component/application';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import bg from './assets/app-bg.jpeg'
import MediaQuery from 'react-responsive';

function App() {

  const parallax = useRef(null)

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
      console.log(`scroll to ${to}`)
    }
  }


  let page;

  page = <ApplicationHome />

  return (
    <>
      <MediaQuery minWidth={600}>
        <div className="App">
          <Parallax pages={3} ref={parallax} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
              offset={0}
              speed={0.5}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img className="bg_img" src={bg} alt="ライフシミュレーション" />
            </ParallaxLayer>

            <ParallaxLayer
              offset={0}
              speed={2}
              onClick={() => scroll(0.7)}
            >

              <div style={{ marginTop: '8rem', textAlign: "center" }}>
                <h1 className="logo">〜将来シミュレーター〜</h1>
                <p style={{ fontSize: "1.6rem", padding: "30px" }}>将来の貯蓄額を計算、推移をグラフや表で知ることができます。</p>
              </div>
              <div className="txt-wrapper">
                <div className="pg-txt"><i class="fas fa-hand-point-down"></i> スクロール</div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={0.9}
              speed={0.5}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => scroll(1.1)}>
              <div className="exp">
                <div class="balloon5">
                  <div class="faceicon">
                    <img src="https://4.bp.blogspot.com/-bTipX3Vmpts/Wn1ZgUbOHXI/AAAAAAABKM4/b31Jvq8aWssiswuiO19BAJmmAC5WAzXwACLcBGAs/s400/character_boy_normal.png" />
                  </div>
                  <div class="chatting">
                    <div class="says">
                      <p>お金の見直しはしたいけど、ファイナンシャルプランナーに相談までは、、、</p>
                    </div>
                  </div>
                </div>
                <div class="balloon5">
                  <div class="faceicon">
                    <img src="https://1.bp.blogspot.com/-CdzqrI3ie7A/WUJG1CjPuWI/AAAAAAABE0Q/dnJSD_xuO7oGgnkdcsvrkD6xkt5HeJTvQCLcBGAs/s800/komatta_woman2.png" />
                  </div>
                  <div class="chatting">
                    <div class="says">
                      <p>貯蓄や運用はしていても、どれくらいのお金を準備しないといけないのかの計算はした事がない、、、、</p>
                    </div>
                  </div>
                </div>

                <p style={{ textAlign: "center" }}>という方に</p>
                <br />
                <p style={{ fontSize: "2rem" }}>将来の貯蓄額をこのツールを使って計算ができます。</p>

                <div style={{ backgroundColor: "#d7ebfe", padding: "1rem 0" }}>
                  <p>自分の将来にはお金が幾ら必要になるのかを知っているのと知らないのとでは、資産運用の方法も大違い？</p>

                  <p>年収や支出、現在の貯蓄などから、自分の貯蓄額がどのように推移してくのかをわかりやすいグラフと表で、資産推移を見ていく事ができます。</p>

                  <p>さぁシミュレーションをやってみましょう！</p>
                </div>
                <br />
                <p>・ブラウザの「戻る」ボタンは使わないでください。（システムの下にある「戻る」ボタンをご利用下さい）</p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1.7}
              speed={2}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => scroll(2)}
            >
              <div className="disclaimer">
                <h2>免責事項</h2>

                <p>・本ツールは、ライフプランに関する複数のお客様の回答に応じて、株式会社PROSPERTEが作成したロジックに基づて結果を試算するものです。将来の成果を保証するものではありません。</p>

                <p>・シミュレーションの内容には万全を期しておりますが、その正確性、完全性、信頼性を保証するものではありません。</p>

                <p>・本ツールの内容は予告なく変更されることがあります。</p>

                <p>・本ツールを利用する事で生じるいかなる損害についても、故意または重過失がある場合を除き責任を負いません。</p>

                <p>・シミュレーションの実施後、シミュレーション結果が株式会社PROSPERTEに送信されます。</p>

                <p>・資産シミューション結果を、お客様及び当社意外の第三者に開示・提供することはありません。</p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

            <ParallaxLayer
              offset={2}
              speed={0.5}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => scroll(2)} >
              {page}
            </ParallaxLayer>
          </Parallax>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <div className="phone-wrapper">
          <div className="hero-section">
            <img src={bg} style={{ marginLeft: 180 }} alt="ライフシミュレーション" />
            <h1 className="logo">〜将来シミュレーター〜</h1>
            <p style={{ fontSize: "1.6rem", padding: "0 40px 40px 40px", }}>将来の貯蓄額を計算、推移をグラフや表で知ることができます。</p>
          </div>
          <div className="p-contents">
            <div className="description">
              <div class="balloon5">
                <div class="faceicon">
                  <img src="https://4.bp.blogspot.com/-bTipX3Vmpts/Wn1ZgUbOHXI/AAAAAAABKM4/b31Jvq8aWssiswuiO19BAJmmAC5WAzXwACLcBGAs/s400/character_boy_normal.png" />
                </div>
                <div class="chatting">
                  <div class="says">
                    <p>お金の見直しはしたいけど、ファイナンシャルプランナーに相談までは、、、</p>
                  </div>
                </div>
              </div>
              <div class="balloon5">
                <div class="faceicon">
                  <img src="https://1.bp.blogspot.com/-CdzqrI3ie7A/WUJG1CjPuWI/AAAAAAABE0Q/dnJSD_xuO7oGgnkdcsvrkD6xkt5HeJTvQCLcBGAs/s800/komatta_woman2.png" />
                </div>
                <div class="chatting">
                  <div class="says">
                    <p>貯蓄や運用はしていても、どれくらいのお金を準備しないといけないのかの計算はした事がない、、、、</p>
                  </div>
                </div>
              </div>

              <p style={{ textAlign: "center" }}>という方に</p>
              <br />
              <p style={{ fontSize: "2rem" }}>将来の貯蓄額をこのツールを使って計算ができます。</p>

              <div style={{ backgroundColor: "#d7ebfe", padding: "1rem" }}>
                <p>自分の将来にはお金が幾ら必要になるのかを知っているのと知らないのとでは、資産運用の方法も大違い？</p>

                <p>年収や支出、現在の貯蓄などから、自分の貯蓄額がどのように推移してくのかをわかりやすいグラフと表で、資産推移を見ていく事ができます。</p>

                <p>さぁシミュレーションをやってみましょう！</p>
              </div>
              <br />
              <p>・ブラウザの「戻る」ボタンは使わないでください。（システムの下にある「戻る」ボタンをご利用下さい）</p>
            </div>
            <div className="p-disclaimer">
              <h2>免責事項</h2>

              <p>・本ツールは、ライフプランに関する複数のお客様の回答に応じて、株式会社PROSPERTEが作成したロジックに基づて結果を試算するものです。将来の成果を保証するものではありません。</p>

              <p>・シミュレーションの内容には万全を期しておりますが、その正確性、完全性、信頼性を保証するものではありません。</p>

              <p>・本ツールの内容は予告なく変更されることがあります。</p>

              <p>・本ツールを利用する事で生じるいかなる損害についても、故意または重過失がある場合を除き責任を負いません。</p>

              <p>・シミュレーションの実施後、シミュレーション結果が株式会社PROSPERTEに送信されます。</p>

              <p>・資産シミューション結果を、お客様及び当社意外の第三者に開示・提供することはありません。</p>
            </div>
            <div className="main">
              {page}
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default App;
