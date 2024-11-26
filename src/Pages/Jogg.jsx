import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lottie from 'react-lottie';
import { useNavigate } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Jogg.css";
import Image1 from "../Assets/01 GetPersonal_artwork 1.svg";
import Glance1 from "../Assets/Jogg 2/intro/at a glance/01-dashboard.png"
import Glance2 from "../Assets/Jogg 2/intro/at a glance/02-transcription.png"
import Glance3 from "../Assets/Jogg 2/intro/at a glance/03-sentiment.png"
import Glance4 from "../Assets/Jogg 2/intro/at a glance/04-report.png"
import Glance5 from "../Assets/Jogg 2/intro/at a glance/05-checklist.png"
import Glance6 from "../Assets/Jogg 2/intro/at a glance/06-upload.png"
import Glance7 from "../Assets/Jogg 2/intro/at a glance/07-account.png"
import Glance8 from "../Assets/Jogg 2/intro/at a glance/08-search.png"
import Glance9 from "../Assets/Jogg 2/intro/at a glance/09-reply.png"
import Worked from "../Assets/Jogg 2/2015-2016/01-wireframes.svg"
import Brand1 from "../Assets/Jogg 2/2015-2016/02-styles/01-style-title.png"
import Brand2 from "../Assets/Jogg 2/2015-2016/02-styles/02-style-logo.png"
import Brand3 from "../Assets/Jogg 2/2015-2016/02-styles/03-style-logomark.png"
import Brand4 from "../Assets/Jogg 2/2015-2016/02-styles/04-style-color-title.png"
import Brand5 from "../Assets/Jogg 2/2015-2016/02-styles/05-style-colors.png"
import Brand6 from "../Assets/Jogg 2/2015-2016/02-styles/06-style-fonts.png"
import Brand7 from "../Assets/Jogg 2/2015-2016/02-styles/07-style-font-example.png"
import Brand8 from "../Assets/Jogg 2/2015-2016/02-styles/08-style-icon-title.png"
import Brand9 from "../Assets/Jogg 2/2015-2016/02-styles/09-style-icons.png"
import Brand10 from "../Assets/Jogg 2/2015-2016/02-styles/10-style-graphics.png"
import Brand11 from "../Assets/Jogg 2/2015-2016/02-styles/11-style-graphic-title.png"
import Brand12 from "../Assets/Jogg 2/2015-2016/02-styles/12-style-identity-title.png"
import Interface1 from "../Assets/Jogg 2/2015-2016/03-interface/01-jogg-screens-reply-1242x2208.jpg"
import Interface2 from "../Assets/Jogg 2/2015-2016/03-interface/02-jogg-screens-bullseye-1242x2208.jpg"
import Interface3 from "../Assets/Jogg 2/2015-2016/03-interface/03-jogg-screens-publish-1242x2208.jpg"
import Interface4 from "../Assets/Jogg 2/2015-2016/03-interface/04-jogg-screens-review-1242x2208.jpg"
import Interface5 from "../Assets/Jogg 2/2015-2016/03-interface/05-jogg-screens-share-1242x2208.jpg"
import Changed1 from "../Assets/Jogg 2/2015-2016/04-what changed/01-jogg_request_site_cinderella.png"
import Changed2 from "../Assets/Jogg 2/2015-2016/04-what changed/02-jogg-link-starwars.png"
import Changed3 from "../Assets/Jogg 2/2015-2016/04-what changed/03-jogg-link-starwars-reply.png"
import Results from "../Assets/Jogg 2/2015-2016/05-results.png"
import year31 from "../Assets/Jogg 2/2017-2018/01-2017/01-create1.png"
import year32 from "../Assets/Jogg 2/2017-2018/01-2017/02-create2.png"
import year33 from "../Assets/Jogg 2/2017-2018/01-2017/03-create3.png"
import year34 from "../Assets/Jogg 2/2017-2018/01-2017/04-published.png"
import year35 from "../Assets/Jogg 2/2017-2018/01-2017/05-curate.png"
import year36 from "../Assets/Jogg 2/2017-2018/01-2017/06-dashboard.png"
import year37 from "../Assets/Jogg 2/2017-2018/01-2017/07-analytics.png"
import year38 from "../Assets/Jogg 2/2017-2018/01-2017/08-edit.png"
import year41 from "../Assets/Jogg 2/2017-2018/02-transcription.png"
import year42 from "../Assets/Jogg 2/2017-2018/03-stations.png"
import logo1 from "../Assets/Jogg 2/2019/01-logo-old.svg"
import logo2 from "../Assets/Jogg 2/2019/02-logo-new.svg"
import logomarks from "../Assets/Jogg 2/2019/03-logomarks.svg"
import changes1 from "../Assets/Jogg 2/2019/04-logotypes/01-old-logotype-base.svg"
import changes2 from "../Assets/Jogg 2/2019/04-logotypes/02-old-logotype.svg"
import changes3 from "../Assets/Jogg 2/2019/04-logotypes/03-new-logotype-base.svg"
import changes4 from "../Assets/Jogg 2/2019/04-logotypes/04-new-logotype.svg"
import lottiegif from "../Assets/Jogg 2/2019/05-jogg-logo.json"
import styles1 from "../Assets/Jogg 2/2019/06-styles-old.png"
import styles2 from "../Assets/Jogg 2/2019/07-styles-new.png"
import imagery1 from "../Assets/Jogg 2/2019/08-imagery-old.png"
import imagery2 from "../Assets/Jogg 2/2019/09-imagery-new.png"
import footer2019 from "../Assets/Jogg 2/2019/10-end.png"
import tablet1 from "../Assets/Jogg 2/2020-2021/01-kiosk-login.png"
import tablet2 from "../Assets/Jogg 2/2020-2021/02-kiosk-dashboard.png"
import tablet3 from "../Assets/Jogg 2/2020-2021/03-kiosk-watch.png"
import tablet4 from "../Assets/Jogg 2/2020-2021/04-kiosk-review.png"
import tablet5 from "../Assets/Jogg 2/2020-2021/05-kiosk-curate.png"
import curated from "../Assets/Jogg 2/2020-2021/06-share.png"
import distribution from "../Assets/Jogg 2/2020-2021/07 - distribution.png"
import divide1 from "../Assets/Jogg 2/2020-2021/08-divide.png"
import divide2 from "../Assets/Jogg 2/2020-2021/09-sidebar.png"
import require1 from "../Assets/Jogg 2/2020-2021/10-require-all.png"
import require2 from "../Assets/Jogg 2/2020-2021/11-curator-results.png"
import studio1 from "../Assets/Jogg 2/2022/01-studio-logos.svg"
import studio2 from "../Assets/Jogg 2/2022/02-studio-logo-full.svg"
import fullColor from "../Assets/Project/Jogg/Jogg FullColor.png"
import lineup2 from "../Assets/Jogg 2/2022/03-memories-logo.svg"
import lineup3 from "../Assets/Jogg 2/2022/04-statemints-logo.svg"
import lineup4 from "../Assets/Jogg 2/2022/05-principles-logo.svg"
import client1 from "../Assets/Jogg 2/2022/clients/disney.svg"
import client2 from "../Assets/Jogg 2/2022/clients/wb.svg"
import client3 from "../Assets/Jogg 2/2022/clients/lionsgate.svg"
import client4 from "../Assets/Jogg 2/2022/clients/sony.svg"
import client5 from "../Assets/Jogg 2/2022/clients/tyler-perry.svg"
import client6 from "../Assets/Jogg 2/2022/clients/snapchat.svg"
import client7 from "../Assets/Jogg 2/2022/clients/anastasia-bh.svg"
import client8 from "../Assets/Jogg 2/2022/clients/maeday.svg"
import client9 from "../Assets/Jogg 2/2022/clients/southern-company.svg"
import statemintsImage from "../Assets/statemints.png";
import juncImage from "../Assets/juncimage.png";
import FooterMain from '../Components/FooterMain';



export default function Jogg() {
  let navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  const [tabIndex, setTabIndex] = useState(0);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: lottiegif,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleChange = (e) => {
    setTabIndex(Number(e.target.value)); 
    handleScrollToTop();
  }

  return (
    <div className="jogg">
      <div className="jogg-header">
        <div className="jogg-headline">
          <svg width="267" height="35" viewBox="0 0 267 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.2187 7.96332C36.2123 7.96332 36.206 7.96332 36.1996 7.96332C34.9041 7.96332 33.8468 9.02554 33.8372 10.3461L33.7198 25.4852C33.7198 25.4884 33.7198 25.4916 33.7198 25.4949C33.7198 25.4981 33.7198 25.5013 33.7198 25.5046C33.7198 28.0875 31.6527 30.1893 29.1124 30.1893C27.6105 30.1893 26.1975 29.4403 25.3339 28.1843C24.5845 27.0963 23.1112 26.8315 22.0411 27.5935C20.971 28.3555 20.7107 29.8535 21.46 30.9416C23.2064 33.4793 26.0674 34.9968 29.1124 34.9968C34.25 34.9968 38.4287 30.7543 38.4477 25.5368C38.4477 25.5336 38.4477 25.5304 38.4477 25.5239L38.5652 10.3848C38.5747 9.05783 37.5237 7.973 36.2187 7.96332Z" fill="#59595B"/>
              <path d="M49.1992 7.84387C44.0521 7.84387 39.8639 12.1025 39.8639 17.3361C39.8639 22.5697 44.0521 26.8283 49.1992 26.8283C54.3463 26.8283 58.5345 22.5697 58.5345 17.3361C58.5345 12.1025 54.3463 7.84387 49.1992 7.84387ZM49.1992 22.0209C46.659 22.0209 44.5919 19.919 44.5919 17.3361C44.5919 14.7532 46.659 12.6513 49.1992 12.6513C51.7394 12.6513 53.8065 14.7532 53.8065 17.3361C53.8065 19.919 51.7394 22.0209 49.1992 22.0209Z" fill="#59595B"/>
              <path d="M68.8128 7.84387C63.6657 7.84387 59.4775 12.1025 59.4775 17.3361C59.4775 22.5697 63.6657 26.8283 68.8128 26.8283C70.4862 26.8283 72.058 26.3763 73.417 25.5885C73.3725 28.1359 71.3277 30.1926 68.8128 30.1926C67.3109 30.1926 65.8979 29.4435 65.0343 28.1876C64.2849 27.0995 62.8116 26.8348 61.7415 27.5967C60.6714 28.3587 60.4111 29.8568 61.1604 30.9448C62.9068 33.4826 65.7678 35 68.8128 35C73.96 35 78.1481 30.7414 78.1481 25.5078V16.855C78.1481 16.6904 78.1323 16.5289 78.1005 16.3707C77.6242 11.5891 73.6393 7.84387 68.8128 7.84387ZM68.8128 22.0209C66.2726 22.0209 64.2055 19.919 64.2055 17.3361C64.2055 14.7532 66.2726 12.6513 68.8128 12.6513C71.3531 12.6513 73.4202 14.7532 73.4202 17.3361C73.4233 19.919 71.3562 22.0209 68.8128 22.0209Z" fill="#59595B"/>
              <path d="M97.9523 16.3707C97.476 11.5891 93.4911 7.84387 88.6646 7.84387C83.5175 7.84387 79.3293 12.1025 79.3293 17.3361C79.3293 22.5697 83.5175 26.8283 88.6646 26.8283C90.338 26.8283 91.9098 26.3763 93.2688 25.5885C93.2243 28.1359 91.1795 30.1926 88.6646 30.1926C87.1627 30.1926 85.7497 29.4435 84.8861 28.1876C84.1367 27.0995 82.6634 26.8348 81.5933 27.5967C80.5232 28.3587 80.2629 29.8568 81.0122 30.9448C82.7586 33.4826 85.6196 35 88.6646 35C93.8118 35 97.9999 30.7414 97.9999 25.5078V16.855C97.9999 16.6871 97.9841 16.5257 97.9523 16.3707ZM88.6646 22.0209C86.1244 22.0209 84.0573 19.919 84.0573 17.3361C84.0573 14.7532 86.1244 12.6513 88.6646 12.6513C91.2049 12.6513 93.272 14.7532 93.272 17.3361C93.272 19.919 91.2049 22.0209 88.6646 22.0209Z" fill="#59595B"/>
              <path d="M2.80218 29.2885C1.25582 29.2885 0.00158691 28.0132 0.00158691 26.4409V18.295C0.00158691 16.7226 1.25582 15.4473 2.80218 15.4473C4.34853 15.4473 5.60277 16.7226 5.60277 18.295V26.4409C5.60594 28.0132 4.35171 29.2885 2.80218 29.2885Z" fill="#F79014"/>
              <path d="M2.80535 29.2886C1.83689 29.2886 0.897012 28.7784 0.376267 27.8647C-0.398499 26.5022 0.0619156 24.7588 1.40188 23.9742L19.7168 13.2228C21.0568 12.435 22.7715 12.9032 23.543 14.2657C24.3178 15.6281 23.8574 17.3716 22.5174 18.1562L4.20247 28.9076C3.76428 29.1659 3.28164 29.2886 2.80535 29.2886Z" fill="#C5327B"/>
              <path d="M21.1171 18.5371C20.6376 18.5371 20.1518 18.4112 19.7073 18.1465L7.21893 10.727C5.88214 9.93279 5.43125 8.18932 6.21237 6.83006C6.99349 5.4708 8.70813 5.01233 10.0449 5.80658L22.5333 13.226C23.8701 14.0203 24.3209 15.7637 23.5398 17.123C23.0191 18.0302 22.0792 18.5371 21.1171 18.5371Z" fill="#EA4A26"/>
              <path d="M2.80218 7.69533C4.3489 7.69533 5.60277 6.42039 5.60277 4.84767C5.60277 3.27494 4.3489 2 2.80218 2C1.25545 2 0.00158691 3.27494 0.00158691 4.84767C0.00158691 6.42039 1.25545 7.69533 2.80218 7.69533Z" fill="#0EA0A0"/>
              <path d="M114.924 17.628V15.724H119.964V10.936H122.036V15.724H127.076V17.628H122.036V22.416H119.964V17.628H114.924Z" fill="#AEAEAE"/>
              <g clip-path="url(#clip0_433_4619)">
              <path d="M165.747 10.5182H149.721C148.4 10.5182 147.33 11.6844 147.33 13.123V24.2064C147.33 25.645 148.4 26.8113 149.721 26.8113H165.747C167.068 26.8113 168.139 25.645 168.139 24.2064V13.123C168.139 11.6844 167.068 10.5182 165.747 10.5182Z" fill="#991155"/>
              <path d="M172.861 11.5482L162.37 5.68101C161.981 5.46474 161.54 5.35132 161.091 5.35212C160.642 5.35291 160.201 5.4679 159.813 5.68555C159.424 5.90321 159.102 6.21589 158.877 6.59227C158.653 6.96866 158.535 7.39553 158.534 7.83012V19.5568C158.533 19.992 158.651 20.4199 158.874 20.7973C159.098 21.1748 159.421 21.4886 159.81 21.7072C160.198 21.9258 160.64 22.0414 161.089 22.0426C161.539 22.0437 161.98 21.9303 162.37 21.7137L172.861 15.8387C173.25 15.6214 173.573 15.3088 173.798 14.9322C174.023 14.5556 174.141 14.1284 174.141 13.6934C174.141 13.2585 174.023 12.8313 173.798 12.4547C173.573 12.0781 173.25 11.7655 172.861 11.5482Z" fill="#E298BD"/>
              <path d="M169.55 7.65604C171.159 7.65604 172.464 6.35664 172.464 4.75374C172.464 3.15084 171.159 1.85144 169.55 1.85144C167.94 1.85144 166.635 3.15084 166.635 4.75374C166.635 6.35664 167.94 7.65604 169.55 7.65604Z" fill="#C5327B"/>
              </g>
              <g clip-path="url(#clip1_433_4619)">
              <path d="M189.401 17.8094C188.813 17.4448 188.159 17.1521 187.456 16.9441C186.704 16.7233 186.001 16.4871 185.364 16.2457C184.7 15.9941 184.13 15.6885 183.673 15.3419C183.129 14.9285 182.854 14.3354 182.854 13.5754C182.854 13.0876 182.96 12.6562 183.17 12.2891C183.375 11.9322 183.65 11.6344 183.989 11.4084C184.312 11.1927 184.679 11.0335 185.077 10.936C185.459 10.8435 185.859 10.7948 186.267 10.7948C186.95 10.7948 187.612 10.9206 188.233 11.1722C188.703 11.3622 189.108 11.6318 189.444 11.981L191.084 10.2504C190.517 9.79598 189.888 9.45449 189.211 9.23625C188.372 8.96665 187.492 8.828 186.596 8.828C185.813 8.828 185.033 8.93327 184.281 9.14125C183.542 9.34665 182.88 9.65989 182.308 10.0733C181.748 10.4815 181.286 11.0002 180.94 11.6164C180.601 12.2198 180.427 12.9567 180.427 13.8039C180.427 14.7745 180.614 15.5473 180.984 16.1019C181.366 16.6771 181.848 17.1444 182.413 17.4884C183.003 17.8479 183.658 18.1354 184.361 18.3434C185.115 18.5668 185.818 18.8056 186.457 19.0546C187.13 19.3191 187.702 19.6477 188.161 20.0329C188.693 20.4796 188.962 21.1138 188.962 21.9149C188.962 22.4053 188.847 22.8469 188.618 23.2321C188.397 23.6044 188.102 23.915 187.74 24.1564C187.397 24.3875 187.009 24.5621 186.588 24.675C186.178 24.788 185.759 24.8445 185.349 24.8445C184.566 24.8445 183.814 24.6596 183.114 24.2976C182.577 24.0177 182.115 23.6506 181.736 23.2012L180.026 24.8573C180.655 25.5069 181.387 25.9845 182.208 26.2798C183.185 26.6315 184.22 26.8112 185.277 26.8112C186.108 26.8112 186.909 26.6983 187.661 26.4749C188.397 26.2567 189.049 25.9229 189.601 25.4889C190.145 25.0602 190.584 24.5107 190.907 23.856C191.23 23.2038 191.392 22.4207 191.392 21.5323C191.392 20.5618 191.205 19.7838 190.833 19.2189C190.448 18.6361 189.965 18.1611 189.401 17.8094Z" fill="#59595B"/>
              <path d="M198.637 11.2775V11.7396V26.3542H200.908V11.7396V11.2775H201.372H206.422V9.31073H193.122V11.2775H198.172H198.637Z" fill="#59595B"/>
              <path d="M217.667 24.2462C217.087 24.5415 216.372 24.6904 215.54 24.6904C214.706 24.6904 213.99 24.5415 213.41 24.2462C212.835 23.9535 212.363 23.571 212.009 23.1114C211.66 22.6595 211.409 22.1562 211.257 21.6196C211.111 21.0984 211.036 20.59 211.036 20.1099V9.2876H208.763V20.21C208.763 21.2294 208.935 22.1562 209.273 22.9676C209.61 23.7764 210.084 24.4696 210.687 25.0319C211.29 25.5968 212.014 26.0384 212.833 26.3465C213.656 26.6546 214.567 26.8138 215.54 26.8138C216.513 26.8138 217.424 26.6572 218.247 26.3465C219.066 26.0384 219.782 25.5968 220.377 25.0345C220.973 24.4722 221.447 23.7738 221.794 22.965C222.14 22.1537 222.315 21.2268 222.315 20.2126V9.2876H220.041V20.1099C220.041 20.59 219.967 21.0984 219.82 21.6196C219.669 22.1588 219.415 22.6595 219.069 23.1114C218.714 23.571 218.242 23.9535 217.667 24.2462Z" fill="#59595B"/>
              <path d="M238.456 11.3827C237.661 10.6818 236.732 10.1529 235.695 9.81138C234.645 9.46476 233.542 9.2876 232.41 9.2876H225.787V26.3568H232.03C233.062 26.3568 234.13 26.1796 235.202 25.833C236.27 25.4889 237.255 24.9575 238.13 24.2591C238.998 23.5658 239.719 22.6749 240.268 21.6119C240.814 20.5567 241.092 19.2831 241.092 17.8222C241.092 16.3715 240.848 15.0954 240.371 14.035C239.896 12.9721 239.249 12.0811 238.456 11.3827ZM238.048 20.8365C237.635 21.671 237.063 22.3617 236.344 22.8854C235.638 23.4015 234.804 23.7867 233.86 24.028C232.936 24.2642 231.946 24.3849 230.912 24.3849H228.522H228.058V23.9202V11.7191V11.2544H228.522H231.445C232.464 11.2544 233.416 11.375 234.276 11.6138C235.153 11.8577 235.928 12.2454 236.575 12.7667C237.232 13.2956 237.753 13.9914 238.12 14.8361C238.482 15.6706 238.667 16.6745 238.667 17.8171C238.669 18.9904 238.461 20.0046 238.048 20.8365Z" fill="#59595B"/>
              <path d="M246.109 9.2876H243.835V26.3568H246.109V9.2876Z" fill="#59595B"/>
              <path d="M264.444 11.2133C263.648 10.4327 262.686 9.82935 261.585 9.42368C260.518 9.02827 259.327 8.828 258.041 8.828C257.99 8.828 257.941 8.828 257.89 8.828C256.561 8.828 255.329 9.04368 254.228 9.46989C253.135 9.89354 252.178 10.5046 251.39 11.2852C250.599 12.0683 249.973 13.0285 249.524 14.1403C249.075 15.2572 248.847 16.5204 248.847 17.8941C248.847 19.2344 249.075 20.4668 249.524 21.5554C249.971 22.6441 250.599 23.5889 251.39 24.3618C252.18 25.1346 253.135 25.7431 254.231 26.1668C255.331 26.593 256.563 26.8087 257.887 26.8087C259.224 26.7933 260.466 26.5596 261.578 26.118C262.684 25.6764 263.649 25.0576 264.447 24.2719C265.245 23.4888 265.876 22.5414 266.325 21.4527C266.774 20.3615 267.003 19.1291 267.003 17.7914C267.003 16.4177 266.774 15.1596 266.325 14.0504C265.873 12.9515 265.242 11.9938 264.444 11.2133ZM264.1 20.5207C263.785 21.3885 263.33 22.1485 262.748 22.7853C262.165 23.4246 261.454 23.9304 260.638 24.295C259.82 24.6596 258.904 24.8445 257.91 24.8445C256.917 24.8445 256.001 24.6596 255.193 24.295C254.385 23.933 253.679 23.4246 253.096 22.7879C252.516 22.1537 252.062 21.3911 251.746 20.5233C251.433 19.6631 251.274 18.7106 251.274 17.6964C251.274 16.7464 251.433 15.8426 251.749 15.0158C252.065 14.1839 252.519 13.4445 253.101 12.818C253.684 12.1889 254.39 11.6908 255.198 11.3365C256.006 10.9822 256.92 10.8025 257.913 10.8025C258.904 10.8025 259.822 10.9822 260.638 11.3365C261.457 11.6908 262.165 12.1889 262.75 12.8206C263.33 13.4471 263.785 14.1865 264.103 15.0184C264.418 15.8477 264.577 16.7515 264.577 17.6989C264.575 18.708 264.416 19.6606 264.1 20.5207Z" fill="#59595B"/>
              </g>
              <defs>
              <clipPath id="clip0_433_4619">
              <rect width="26.8114" height="25.8305" fill="white" transform="translate(147.33 0.980774)"/>
              </clipPath>
              <clipPath id="clip1_433_4619">
              <rect width="86.9735" height="17.9832" fill="white" transform="translate(180.026 8.828)"/>
              </clipPath>
              </defs>
          </svg>

          <p>Branding // Web & Mobile App // UX & UI Design</p>
        </div>
      </div>
      <div className="dropdown-menu">
            <select name="section" onChange={handleChange} >
              <option value={0}>intro</option>
              <option value={1}>2015-2016</option>
              <option value={2}>2017-2018</option>
              <option value={3}>2019</option>
              <option value={4}>2020-2021</option>
              <option value={5}>2022</option>
            </select>
          </div>
      <div className="tabular-layout-main">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => {setTabIndex(index);handleScrollToTop();}}>
          <div className="stickylist">
          <TabList>
            <Tab>intro</Tab>
            <Tab>2015-2016</Tab>
            <Tab>2017-2018</Tab>
            <Tab>2019</Tab>
            <Tab>2020-2021</Tab>
            <Tab>2022</Tab>
          </TabList>
          </div>

        
        
        <TabPanel>
          <div className="jogg-section-1">
            <div className="section-1-cluster">
              <div className="section-1-text">
                <h2>about</h2>
                  <p>Jogg & Jogg Studio are web applications that work in tandem to allow users to get the most valuable insight using video-powered feedback.
                  <br></br><br></br>
                  Our goal was to create a product (Jogg Studio) that allows clients to easily gather, curate, transcribe, and analyze videos submitted by their audience via the consumer-facing product (Jogg). </p>
                <h2>responsibilities</h2>
                  <div className="highlight">
                    <h6>Roles</h6>
                    <p>Lead Product Designer -{'>'} Chief Creative Officer</p>
                  </div>
                  <p>
                  As the lead product designer, I was involved in all steps of the creation of Jogg & Jogg Studio, from conceptualization and planning, to branding and graphic illustration, to user experience, interface design, and prototyping. I worked closely with developers to ensure that the designs translated well into the final product.
                  <br></br><br></br>
Jogg is an ongoing project that has taken up the bulk of my career as a designer. Over the course of eight years, we’ve gone through numerous iterations of the product, as well as several refinements of the vision and rebrandings.
                  </p>
              </div>
              <div className="section-1-image">
                <img src={Image1} alt="a computer screen" />
              </div>
            </div>
            <div className="jogg-carousel">
              <h2>at a glance</h2>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["t", "m"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                
                <div className="carousel-stuff"><img src={Glance1} alt="at a glance" /></div>
                <div className="carousel-stuff"><img src={Glance2} alt="at a glance" /></div>
                <div className="carousel-stuff"><img src={Glance3} alt="at a glance" /></div>
                <div className="carousel-stuff"><img src={Glance4} alt="at a glance" /></div>
                <div className="carousel-stuff"><img src={Glance5} alt="at a glance" /></div>
                <div className="carousel-stuff"><img src={Glance6} alt="at a glance" /></div>
                <div className="carousel-stuff"><img src={Glance7} alt="at a glance" /></div>
                <div className="carousel-stuff"><img src={Glance8} alt="at a glance" /></div>
                <div className="carousel-stuff"><img src={Glance9} alt="at a glance" /></div>
      
              </Carousel>
              <div className="next-button">
                <button onClick={() => {setTabIndex(1); handleScrollToTop();}}>throughout the years & jogg {'>'}</button>
              </div>
              
            </div>
          </div>

        </TabPanel>

        <TabPanel>
          <div className="timeline-container-main" id="p1">
            <h1>throughout the years @ jogg</h1>
            <div className="timeline-container">
              
              <div className="timeline">
                <h6>2015</h6>
                <div className="year1"> </div>
                <h6>2016</h6>
                <div className="year2"></div>
              </div>
              <div className="jogg-content">
                <div className="year1-content">
                  <div className="mobile-years">
                    <h2>2015</h2>
                  </div>
                  <p>
                  During this time, Jogg as a product was in its early years. It was introduced as a mobile app with the primary purpose being a fast and easy way to gather and curate user-generated content. I was brought on to the company as its sole designer.
                  </p>
                  <div className="how-it-worked-container">
                    <h2>how it worked</h2>
                    <div className="how-it-worked">
                      <div className="worked-text">
                        <ol>
                          <li>
                          Users can create “Requests” (later known simply as “Joggs”) for video from their audience. These requests could be private for friends and family (e.g. “Send a video message to Anna for her birthday!”), or public to engage with a larger audience (e.g “Send me a video of your cover of my new song!”).
                          </li>
                          <br></br>
                          <li>
                          Users can share these requests, where the recipient can easily record or upload their video response in the mobile app.
                          </li>
                          <br></br>
                          <li>
                          Responses to these requests will be sent to the inbox of the original request creator, where they can curate them with a “tank” (delete), “thank” (archive), or “bullseye” (publish).
                          </li>
                        </ol>
                      </div>
                      <div className="worked-image">
                        <img src={Worked} alt="how it worked" />
                      </div>
                    </div>
                  </div>
                  <div className="branding-container">
                    <h2>branding</h2>
                    <div className="branding-images">
                      <img src={Brand1} alt="branding" />
                      <img src={Brand2} alt="branding" />
                      <img src={Brand3} alt="branding" />
                      <img src={Brand4} alt="branding" />
                      <img src={Brand5} alt="branding" />
                      <img src={Brand6} alt="branding" />
                      <img src={Brand7} alt="branding" />
                      <img src={Brand8} alt="branding" />
                      <img src={Brand9} alt="branding" />
                      <img src={Brand10} alt="branding" />
                      <img src={Brand11} alt="branding" />
                      <img src={Brand12} alt="branding" />
                    </div>
                  </div>
                  <div className="interface-container">
                    <h2>interface</h2>
                    <div className="interface-images">
                      <img src={Interface1} alt="interface" />
                      <img src={Interface2} alt="interface" />
                      <img src={Interface3} alt="interface" />
                      <img src={Interface4} alt="interface" />
                      <img src={Interface5} alt="interface" />
                    </div>
                  </div>
                </div>
                <div className="year2-content">
                  <div className="mobile-years">
                    <h2>2016</h2>
                  </div>
                  <p>
                  This year, we focused on creating a web experience for people responding to Joggs in order to expand our reach to those who did not have access to the mobile application.
                  </p>
                  <div className="what-changed-container">
                    <h2>what changed?</h2>
                    <div className="what-changed-p1">
                      <p>
                      Previously, Jogg only existed as an iOS mobile application, so when requests and responses could only be sent and received via the app. 
                      <br></br><br></br>
                      When Jogg requests were shared, users would be sent to a page where they would enter their phone number, and from there, they would receive a text message with a link to the App Store to download the Jogg iOS app. 
                      <br></br><br></br>
                      This presented the issue of excluding people who did not have Apple devices from interacting with Joggs.
                      </p>
                      <div className="what-changed-p1-img">
                        <img src={Changed1} alt="What changed?" />
                      </div>
                    </div>
                    <div className="what-changed-p2">
                      <p>
                      In order to make it easier for users to respond to a Jogg request, we created a web application so that users can reply directly from their browser. The interface was similar to the one in the mobile app, where the user can watch the request video, as well as the replies that had been published as favorites. They could also respond to the Jogg request with their own video and share the link.
                      </p>
                      <div className="what-changed-p2-img">
                        <img src={Changed2} alt="what changed?" />
                        <img src={Changed3} alt="what changed?" />
                      </div>
                    </div>
                  </div>
                  <div className="results-container">
                    <h2>results</h2>
                    <p>With this new web experience for responses, we launched our campaign with Star Wars, which received over 90 minutes of high quality, fan-created videos with rights secured.</p>
                    <img src={Results} alt="results" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-navs">
            <button onClick={() => {setTabIndex(0); handleScrollToTop();}}>{'<'} back: intro </button>
            <button onClick={() => {setTabIndex(2); handleScrollToTop();}}>next: 2017 - 2018 {'>'}</button>
            </div>  
          </div>
        </TabPanel>

        <TabPanel>
          <div className="timeline-container-main" id="p2">
            <h1>throughout the years @ jogg</h1>
            <div className="timeline-container">
              <div className="timeline">
                <h6>2017</h6>
                <div className="year3"> </div>
                <h6>2018</h6>
                <div className="year4"></div>
              </div>
              <div className="jogg-content">
                <div className="year3-content">
                  <div className="mobile-years">
                    <h2>2017</h2>
                  </div>
                  <p>With the launch of the new web applications for responses, we decided to create a web flow for the creation of Jogg requests and curation of replies as well. This later evolved to become the product we currently call Jogg Studio.

                  </p>
                  <div className="year3-box-mobile">
                      <img src={year31} width="140px" height="99px" alt="year 3" />
                      <img src={year32} width="140px" height="99px" alt="year 3" />
                      <img src={year33} width="288px" height="206px" alt="year 3" />
                      <img src={year34} width="288px" height="134px" alt="year 3" />
                      <img src={year35} width="140px" height="99px" alt="year 3" />
                      <img src={year36} width="140px" height="99px" alt="year 3" />
                      <img src={year37} width="140px" height="99px" alt="year 3" />
                      <img src={year38} width="140px" height="99px" alt="year 3" />
                      </div>
                    <div className="year3-box">
                      <div className="set1">
                        <img src={year31} alt="year 3" />
                        <img src={year32} alt="year 3" />
                        <img src={year33} alt="year 3" />
                      </div>
                      <div className="set2">
                        <img src={year34} alt="year 3" />
                        <img src={year35} alt="year 3" />
                      </div>
                      <div className="set3">
                        <img src={year36} alt="year 3" />
                        <img src={year37} alt="year 3" />
                        <img src={year38} alt="year 3" />
                      </div>
                    </div>
                  </div>
               
                <div className="year4-content">
                  <div className="mobile-years">
                    <h2>2018</h2>
                  </div>
                  <p>
                  Jogg added transcription to videos, which will later become the foundation of the product and its offerings. With transcriptions, Jogg creators will be able to create highlights and view sentiment analysis of responses.
                  </p>
                  <img src={year41} alt="year 4" />
                  <h2>stations</h2>
                  <p>
                  Stations was created as a feature in Jogg Studio that allows Jogg creators to create a playlist (known as Stations) of their Joggs and invite others to collaborate on this Station.
                  </p>
                  <img src={year42} alt="stations" />

                </div>
              </div>
            </div>
            <div className="tab-navs">
            <button onClick={() => {setTabIndex(1); handleScrollToTop();}}>{'<'} back: 2015 - 2016 </button>
            <button onClick={() => {setTabIndex(3); handleScrollToTop();}}>next: 2019 {'>'}</button>
            </div>  
          </div>
        </TabPanel>

        <TabPanel>
          <div className="timeline-container-main" id="p3">
            <h1>throughout the years @ jogg</h1>
            <div className="timeline-container">
              <div className="timeline">
                <h6>2019</h6>
                <div className="year5"> </div>
              </div>
              <div className="jogg-content">
                <div className="year5-content">
                  <div className="mobile-years">
                    <h2>2019</h2>
                  </div>
                  <p>2019 marked the first huge rebranding for Jogg as a company and as a product. As the lead designer, I spearheaded the complete overhaul of the look and feel of Jogg’s identity, which included changes to the logo, colors, and imagery used throughout the product.</p>
                  <h2>logo</h2>
                  <p>The main reason for changing the logo was that the previous design had ascenders and descenders that made it difficult to vertically align in a visually appealing manner. The new logo design features more uniform spacing above and below the cap height, which solved the alignment issues that we experienced while working with the old logo.</p>
                  <div className="jogg-logos-2019">
                    <div className="logo-old">
                      <img src={logo1} alt="first logo" />
                      <label>Jogg logo (old)</label>
                    </div>  
                    <div className="logo-new">
                      <img src={logo2} alt="second logo" />
                      <label>Jogg logo (new)</label>
                    </div>
                  </div>
                  <h6>Philosophy behind the new logo mark</h6>
                  <p>The silhouette of the logo doubles as both a play button, to represent the product’s function with video, as well as the letter “j” in Jogg. The previous logo had an analogous color scheme centered around the main coral red color, while the new design has a more square tetradic color scheme. This was done to not only give a more playful feel to the logo, but to also open up the opportunity to use a variety of colors throughout the product to signal purpose within interactions.</p>
                  <img src={logomarks} alt="logo marks" />
                  <div className="logo-changes">
                    <div className="logo-changes-text">
                      <h6>Changes to the logo type</h6>
                      <p>
                      The old logo type is derived from the main font used in the product at the time (DIN) and altered to have rounded edges.
                      <br></br><br></br>
                      The new logo type was made from scratch, composed of 3 circles and 3 hooks. When put together, each letter is made to look like it can be drawn with a single stroke, allowing us to create a smooth animation for the logo.
                      </p>
                    </div>
                    <div className="logo-changes-image">
                      <img src={changes1} alt="logo types" />
                      <img src={changes2} alt="logo types" />
                      <img src={changes3} alt="logo types" />
                      <img src={changes4} alt="logo types" />
                    </div>
                  </div>
                  <div className="animation-box">
                    <Lottie options={defaultOptions}
                      height={202}
                      width={337}
                    />
                  </div>
                  <h2>colors</h2>
                  <p>
                  As mentioned earlier, the primary color used in the old styles was the coral red color. In the user interface of the applications, this color was used to highlight all the elements that were interactable (buttons, links, icons, etc.). However, this was something I wanted to change because in our day-to-day lives, the color red is typically used to denote “stop” or a negative action.
                  <br></br><br></br>
                  With the new color palette, I was able to select colors and use them with meaning. The magenta color was the main color, which I used to emphasize certain elements, such as headlines, or to show when a specific object was active. The teal green color was used for primary interactions. The yellow orange was used for notices or warnings, and the red was used for errors and negative interactions.
                  </p>
                  <div className="jogg-styles">
                    <div className="jogg-styles-old">
                      <img src={styles1} alt="old styles" />
                      <label>Styles with old colors</label>
                    </div>
                    <div className="jogg-styles-new">
                      <img src={styles2} alt="new styles" />
                      <label>Styles with new colors</label>
                    </div>
                  </div>
                  <h2>imagery</h2>
                  <p>
                  This rebranding gave me the opportunity to also change the style of imagery that was used in Jogg Studio. I chose to go with a more vibrant look for the graphics to match the feel of the rest of the application.
                  </p>
                  <div className="jogg-imagery">
                    <div className="jogg-imagery-old">
                      <img src={imagery1} alt="old imagery" />
                      <label>Styles with old colors</label>
                    </div>
                    <div className="jogg-imagery-new">
                      <img src={imagery2} alt="new imagery" />
                      <label>Styles with new colors</label>
                    </div>

                  </div>
                  <div className="footer-2019">
                    <img src={footer2019} alt="2019 footer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-navs">
              <button onClick={() => {setTabIndex(2); handleScrollToTop();}}>{'<'} back: 2017 - 2018 </button>
              <button onClick={() => {setTabIndex(4); handleScrollToTop();}}>next: 2020-2021 {'>'}</button>
            </div>  
          </div>
        </TabPanel>

        <TabPanel>
          <div className="timeline-container-main" id="p4">
            <h1>throughout the years @ jogg</h1>
            <div className="timeline-container">
              <div className="timeline">
                <h6>2020</h6>
                <div className="year6"> </div>
                <h6>2021</h6>
                <div className="year7"></div>
              </div>
              <div className="jogg-content">
                <div className="year6-content">
                  <div className="mobile-years">
                    <h2>2020</h2>
                  </div>
                <p>2020 was the launch of Jogg’s iPad product, Kiosk. With Jogg Kiosk, clients were able to set up booths or stations and have their audience submit videos at conventions or promotional events. With Jogg Kiosk, clients are able to circumvent a major barrier to entry (requiring their audience download the app on their phone in order to send a video response), thus garnering more engagement on-site for their campaigns.</p>
                <h2>how it works</h2>
                <ol>
                  <li>Clients would have an iPad with Jogg Kiosk installed and open at their event.</li>
                  <li>The iPad will be locked into Kiosk mode unless the pin number (designated by the client) is entered. This prevents users from leaving Jogg Kiosk and using the device for unintended purposes.</li>
                  <li>Users can freely watch the video prompt, view responses that have been favorited, and record & submit their own response to the Jogg.</li>
                  <li>Response are saved directly into the iPad and can be uploaded to Jogg at the client’s convenience (we anticipated that the internet connection at some locations where Kiosk would be used might be spotty, so we wanted to create a seamless method for video submission).</li>
                </ol>
                <div className="tablet">
                  <div className="quad-tablet">
                    <img src={tablet1} alt="kiosk" />
                    <img src={tablet2} alt="kiosk" />
                    <img src={tablet3} alt="kiosk" />
                    <img src={tablet4} alt="kiosk" />
                  </div>
                  <div className="big-tablet">
                    <img src={tablet5} alt="kiosk" />
                  </div>
                </div>
                <h2>results</h2>
                <p>Jogg Kiosk was used by Warner Bros. at Comic-Con and WonderCon to capture the excitement and enthusiasm of their most passionate DC Comics fans. Everyone at the DC Comics booths were given a chance to freely share thoughts about what they loved and wanted to see more of by recording a video on an iPad that was sent directly to the team at Warner Bros.</p>
                </div>
                <div className="year7-content">
                  <div className="mobile-years">
                    <h2>2021</h2>
                  </div>
                  <p>
                  Jogg Selects was created as a solution for even faster curation of videos. Some brands would have multiple people working on the same campaign, so we created a way for clients to add “curators” for more efficient management of incoming replies.
                  </p>
                  <h2>the problem</h2>
                  <p>
                  As Jogg campaigns began to grow, we realized that it could be difficult for one person to manage. Prior to this, if clients wanted to have more than one team member working on a single Jogg campaign, they would have to have all of them share the same account. However, this posed a risk as anyone with the access to the account would be able to change settings for the entire brand and its Joggs. So we created Jogg Selects, a built in feature for Jogg Studio, that allows multiple team members curation permissions for a specific Jogg.
                  </p>
                  <h2>the solution</h2>
                  <div className="solution">
                    <p>
                    When viewing the curation screen, the Jogg owner will be prompted with an option to assign curators to the Jogg if there are replies in the inbox.
                    </p>
                    <img src={curated} alt="share" />
                  </div>
                  <p>
                  They will then be able to select a distribution method from the following options:
                  </p>
                  <div className="distribution">
                    <img src={distribution} alt="distribution" />
                  </div> 
                  <h6>Divide Up</h6>
                  <p>
                    If the “Divide Up” option is chosen, the Jogg owner would be able to add curators by entering their email addresses and assign the number of videos to each curator.
                    <br></br><br></br>
Then, in the curation dashboard, the Jogg owner would be able to see who each video is assigned to and what the result of the curation was.
                  </p> 
                  <div className="divide-up">
                    <img src={divide1} alt="divide" />
                    <img src={divide2} alt="divide" />
                  </div>
                  <h6>Require All</h6>
                  <p>
                  If the “Require All” option is selected, curators can be added and all of the results can be seen in the curation dashboard.
                  </p>
                  <div className="require">
                    <img src={require1} alt="require all" />
                    <img src={require2} alt="require all" />
                  </div>


                </div>
            </div>
          </div>
            <div className="tab-navs">
                <button onClick={() => {setTabIndex(3); handleScrollToTop();}}>{'<'} back: 2019 </button>
                <button onClick={() => {setTabIndex(5); handleScrollToTop();}}>next: 2022 {'>'}</button>
              </div>  
          </div>  
        </TabPanel>

        <TabPanel>
          <div className="timeline-container-main" id="p5">
            <h1>throughout the years @ jogg</h1>
            <div className="timeline-container">
              <div className="timeline">
                <h6>2022</h6>
                
              </div>
              <div className="jogg-content">
                <div className="year8-content">
                  <div className="mobile-years">
                    <h2>2022</h2>
                  </div>
                  <p>
                In 2022, Jogg as a brand began to solidify its identity not just as a singular product, but as a suite of solutions. We began to define each product more clearly by separating them and giving them their own names and logos.
                  <br></br><br></br>
                To maintain connection between each product and the parent brand, Jogg, we decided to derive the colors from the Jogg logo while maintaining a geometric base for each one.
                  </p>
                  <div className="studio-logo">
                    <div className="studio-text">
                      <h2>new studio logo</h2>
                      <p>
                      Jogg Studio is the evolution of the original Jogg product. When coming up with the logo for Studio, I considered that its core purpose revolved around gathering, analyzing, and curating video. I used the magenta color from the Jogg logo as the main color and incorporated subtle human form to represent the way Jogg Studio connects clients to their audience.
                      </p>
                    </div>
                    <div className="studio-img">
                      <img src={studio1} alt="studio" />
                      <label>Logo concepts for Jogg Studio</label>
                      <div className="studio2">
                        <img src={studio2} alt="studio" />
                        <label>Final Jogg Studio logo</label>
                      </div>
                    </div>
                  </div>
                  <div className="the-lineup">
                    <h2>the </h2><img src={fullColor} alt="jogg full color" /><h2> product lineup</h2>
                  </div>
                  <div className="lineup-items">
                    <img src={studio2} alt="studio" width="155.11px" height="33.48px" />
                    <img src={lineup2} alt="memories" width="200.62px" height="30.93px" />
                    <img src={lineup3} alt="statemints" width="201.8px" height="24.15px" />
                    <img src={lineup4} alt="principles" width="189.8px" height="35.44px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="conclusion">
              <h1>conclusion</h1>
            </div>
            <p>
            Since I’ve started working at Jogg at its founding, the company was able to grow and work with many brands across a variety of industries, offering them ways to easily interact with their audience, receive feedback, and gain human insights. Below, you can see some of the clients I've worked with in my years at Jogg.
            </p>
            <div className="clients">
              <div className="clients-row-1">
                <img src={client1} alt="client" width="125px" height="53px" />
                <img src={client2} alt="client" width="64px" height="71px" />
                <img src={client3} alt="client" width="177px" height="21px" />
                <img src={client4} alt="client" width="45px" height="72px" />
                <img src={client5} alt="client" width="115px" height="75px" />
              </div>
              <div className="clients-row-2">
                <img src={client6} alt="client" width="50px" height="50px" />
                <img src={client7} alt="client" width="241px" height="35px" />
                <img src={client8} alt="client" width="106px" height="72px" />
                <img src={client9} alt="client" width="248.39px" height="35.22px" />
              </div>
            </div>
            <div className="clients-mobile">

                <img src={client1} alt="client" width="89px" height="38px" />
                <img src={client2} alt="client" width="42px" height="47px" />
                <img src={client3} alt="client" width="116px" height="14px" />
                <img src={client4} alt="client" width="36px" height="59px" />
                <img src={client5} alt="client" width="69px" height="45px" />
            
                <img src={client7} alt="client" width="129px" height="19px" />
                <img src={client8} alt="client" width="76px" height="52px" />
                <img src={client9} alt="client" width="160px" height="23px" />

            </div>

          </div>  
          <div className="footer">
            <div className="footer-border">    
            </div>
            <h2>view more projects</h2>
            <div className="more-projects">
              <div className="more-jun" onClick={() => {
                    let path=`/juncphotography`
                    navigate(path);
                }}>
                <div className="juns-image">
                  <img src={juncImage} alt="jun C" width="185.84px" height="105px" />
                </div>
                <div className="juns-text-1">
                <svg width="246" height="27" viewBox="0 0 246 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.6 0.689999C8.66 1.41 8.69 2.01 8.69 2.49C8.69 2.77 8.68 3.06 8.66 3.36C8.66 3.64 8.64 3.96 8.6 4.32C8.18 4.4 7.77 4.46 7.37 4.5C6.97 4.54 6.57 4.56 6.17 4.56C5.79 4.56 5.4 4.54 5 4.5C4.62 4.46 4.23 4.4 3.83 4.32C3.79 3.98 3.76 3.67 3.74 3.39C3.72 3.09 3.71 2.8 3.71 2.52C3.71 2.26 3.72 1.98 3.74 1.68C3.76 1.38 3.79 1.05 3.83 0.689999C4.23 0.589999 4.63 0.529999 5.03 0.509999C5.45 0.469998 5.86 0.449998 6.26 0.449998C6.64 0.449998 7.02 0.469998 7.4 0.509999C7.8 0.529999 8.2 0.589999 8.6 0.689999ZM8.57 20.79C8.57 22.21 8.43 23.32 8.15 24.12C7.87 24.94 7.4 25.51 6.74 25.83C6.1 26.15 5.24 26.31 4.16 26.31C3.54 26.31 2.96 26.27 2.42 26.19C1.9 26.13 1.41 26.03 0.95 25.89V22.02L1.04 21.96C1.26 22 1.49 22.03 1.73 22.05C1.95 22.09 2.22 22.11 2.54 22.11C3.06 22.11 3.39 22 3.53 21.78C3.69 21.58 3.77 21.2 3.77 20.64V6.12H8.57V20.79ZM16.7445 21C14.9045 21 13.5945 20.51 12.8145 19.53C12.0345 18.55 11.6445 17.15 11.6445 15.33V6.12H16.4445L16.4745 14.16C16.4745 15.06 16.6345 15.7 16.9545 16.08C17.2745 16.44 17.9245 16.62 18.9045 16.62C19.8445 16.62 20.4745 16.46 20.7945 16.14C21.1345 15.8 21.3145 15.23 21.3345 14.43V6.12H26.1345V20.73H21.5745L21.3345 19.08H21.2445C20.9845 19.66 20.4545 20.13 19.6545 20.49C18.8545 20.83 17.8845 21 16.7445 21ZM34.5277 20.73H29.7277V6.12H34.2877L34.5277 8.79H34.6177C34.8977 7.89 35.3977 7.2 36.1177 6.72C36.8377 6.22 37.8377 5.97 39.1177 5.97C40.8577 5.97 42.1377 6.46 42.9577 7.44C43.7977 8.42 44.2177 10.12 44.2177 12.54V20.73H39.4177L39.3877 13.47C39.3877 12.35 39.2177 11.55 38.8777 11.07C38.5377 10.59 37.8977 10.35 36.9577 10.35C36.0777 10.35 35.4577 10.57 35.0977 11.01C34.7377 11.43 34.5477 12.16 34.5277 13.2V20.73ZM66.6153 16.5V20.4C66.1153 20.6 65.3753 20.75 64.3953 20.85C63.4153 20.95 62.3753 21 61.2753 21C59.6953 21 58.3753 20.78 57.3153 20.34C56.2753 19.9 55.4953 19.14 54.9753 18.06C54.4753 16.98 54.2153 15.48 54.1953 13.56C54.1953 11.58 54.4653 10.04 55.0053 8.94C55.5653 7.84 56.3753 7.07 57.4353 6.63C58.4953 6.19 59.7653 5.97 61.2453 5.97C62.1253 5.97 63.0553 6.03 64.0353 6.15C65.0153 6.27 65.8153 6.43 66.4353 6.63L66.4653 10.65L66.3753 10.71C65.7753 10.59 65.1353 10.5 64.4553 10.44C63.7753 10.38 63.1053 10.35 62.4453 10.35C61.1053 10.35 60.1753 10.6 59.6553 11.1C59.1353 11.6 58.8753 12.44 58.8753 13.62C58.8753 14.52 58.9853 15.19 59.2053 15.63C59.4253 16.07 59.7953 16.36 60.3153 16.5C60.8353 16.64 61.5453 16.71 62.4453 16.71C63.1453 16.71 63.8153 16.68 64.4553 16.62C65.0953 16.56 65.7753 16.49 66.4953 16.41L66.6153 16.5ZM86.122 21.13C84.9433 21.13 83.8773 20.8613 82.924 20.324C81.9706 19.7693 81.208 18.9807 80.636 17.958C80.0813 16.918 79.804 15.6527 79.804 14.162C79.804 12.6713 80.0813 11.4147 80.636 10.392C81.1906 9.352 81.9446 8.56333 82.898 8.026C83.8513 7.48867 84.926 7.22 86.122 7.22C87.422 7.22 88.5833 7.51467 89.606 8.104C90.646 8.676 91.4606 9.49067 92.05 10.548C92.6393 11.588 92.934 12.7927 92.934 14.162C92.934 15.5487 92.6393 16.762 92.05 17.802C91.4606 18.842 90.646 19.6567 89.606 20.246C88.5833 20.8353 87.422 21.13 86.122 21.13ZM79.076 26.044V7.35H80.844V11.458L80.662 14.188L80.922 16.944V26.044H79.076ZM85.992 19.492C86.9626 19.492 87.8293 19.2753 88.592 18.842C89.3546 18.3913 89.9613 17.7673 90.412 16.97C90.8626 16.1553 91.088 15.2193 91.088 14.162C91.088 13.1047 90.8626 12.1773 90.412 11.38C89.9613 10.5827 89.3546 9.95867 88.592 9.508C87.8293 9.05733 86.9626 8.832 85.992 8.832C85.0213 8.832 84.146 9.05733 83.366 9.508C82.6033 9.95867 81.9966 10.5827 81.546 11.38C81.1126 12.1773 80.896 13.1047 80.896 14.162C80.896 15.2193 81.1126 16.1553 81.546 16.97C81.9966 17.7673 82.6033 18.3913 83.366 18.842C84.146 19.2753 85.0213 19.492 85.992 19.492ZM103.665 7.22C104.774 7.22 105.745 7.43667 106.577 7.87C107.426 8.286 108.085 8.92733 108.553 9.794C109.038 10.6607 109.281 11.7527 109.281 13.07V21H107.435V13.252C107.435 11.8133 107.071 10.73 106.343 10.002C105.632 9.25667 104.627 8.884 103.327 8.884C102.356 8.884 101.507 9.08333 100.779 9.482C100.068 9.86333 99.5137 10.4267 99.115 11.172C98.7337 11.9 98.543 12.784 98.543 13.824V21H96.697V1.708H98.543V11.094L98.179 10.392C98.6124 9.404 99.3057 8.63267 100.259 8.078C101.212 7.506 102.348 7.22 103.665 7.22ZM119.831 21.13C118.514 21.13 117.327 20.8353 116.269 20.246C115.229 19.6393 114.406 18.816 113.799 17.776C113.193 16.7187 112.889 15.514 112.889 14.162C112.889 12.7927 113.193 11.588 113.799 10.548C114.406 9.508 115.229 8.69333 116.269 8.104C117.309 7.51467 118.497 7.22 119.831 7.22C121.183 7.22 122.379 7.51467 123.419 8.104C124.477 8.69333 125.3 9.508 125.889 10.548C126.496 11.588 126.799 12.7927 126.799 14.162C126.799 15.514 126.496 16.7187 125.889 17.776C125.3 18.816 124.477 19.6393 123.419 20.246C122.362 20.8353 121.166 21.13 119.831 21.13ZM119.831 19.492C120.819 19.492 121.695 19.2753 122.457 18.842C123.22 18.3913 123.818 17.7673 124.251 16.97C124.702 16.1553 124.927 15.2193 124.927 14.162C124.927 13.0873 124.702 12.1513 124.251 11.354C123.818 10.5567 123.22 9.94133 122.457 9.508C121.695 9.05733 120.828 8.832 119.857 8.832C118.887 8.832 118.02 9.05733 117.257 9.508C116.495 9.94133 115.888 10.5567 115.437 11.354C114.987 12.1513 114.761 13.0873 114.761 14.162C114.761 15.2193 114.987 16.1553 115.437 16.97C115.888 17.7673 116.495 18.3913 117.257 18.842C118.02 19.2753 118.878 19.492 119.831 19.492ZM134.884 21.13C133.601 21.13 132.613 20.7833 131.92 20.09C131.227 19.3967 130.88 18.4173 130.88 17.152V4.334H132.726V17.048C132.726 17.8453 132.925 18.4607 133.324 18.894C133.74 19.3273 134.329 19.544 135.092 19.544C135.907 19.544 136.583 19.31 137.12 18.842L137.77 20.168C137.406 20.4973 136.964 20.74 136.444 20.896C135.941 21.052 135.421 21.13 134.884 21.13ZM128.436 8.884V7.35H136.886V8.884H128.436ZM146.212 21.13C144.895 21.13 143.708 20.8353 142.65 20.246C141.61 19.6393 140.787 18.816 140.18 17.776C139.574 16.7187 139.27 15.514 139.27 14.162C139.27 12.7927 139.574 11.588 140.18 10.548C140.787 9.508 141.61 8.69333 142.65 8.104C143.69 7.51467 144.878 7.22 146.212 7.22C147.564 7.22 148.76 7.51467 149.8 8.104C150.858 8.69333 151.681 9.508 152.27 10.548C152.877 11.588 153.18 12.7927 153.18 14.162C153.18 15.514 152.877 16.7187 152.27 17.776C151.681 18.816 150.858 19.6393 149.8 20.246C148.743 20.8353 147.547 21.13 146.212 21.13ZM146.212 19.492C147.2 19.492 148.076 19.2753 148.838 18.842C149.601 18.3913 150.199 17.7673 150.632 16.97C151.083 16.1553 151.308 15.2193 151.308 14.162C151.308 13.0873 151.083 12.1513 150.632 11.354C150.199 10.5567 149.601 9.94133 148.838 9.508C148.076 9.05733 147.209 8.832 146.238 8.832C145.268 8.832 144.401 9.05733 143.638 9.508C142.876 9.94133 142.269 10.5567 141.818 11.354C141.368 12.1513 141.142 13.0873 141.142 14.162C141.142 15.2193 141.368 16.1553 141.818 16.97C142.269 17.7673 142.876 18.3913 143.638 18.842C144.401 19.2753 145.259 19.492 146.212 19.492ZM162.773 26.174C161.525 26.174 160.329 25.992 159.185 25.628C158.041 25.264 157.114 24.744 156.403 24.068L157.339 22.664C157.98 23.236 158.769 23.6867 159.705 24.016C160.658 24.3627 161.664 24.536 162.721 24.536C164.454 24.536 165.728 24.1287 166.543 23.314C167.358 22.5167 167.765 21.2687 167.765 19.57V16.164L168.025 13.824L167.843 11.484V7.35H169.611V19.336C169.611 21.6933 169.03 23.418 167.869 24.51C166.725 25.6193 165.026 26.174 162.773 26.174ZM162.435 20.48C161.135 20.48 159.965 20.2027 158.925 19.648C157.885 19.076 157.062 18.2873 156.455 17.282C155.866 16.2767 155.571 15.124 155.571 13.824C155.571 12.524 155.866 11.38 156.455 10.392C157.062 9.38667 157.885 8.60667 158.925 8.052C159.965 7.49733 161.135 7.22 162.435 7.22C163.648 7.22 164.74 7.47133 165.711 7.974C166.682 8.47667 167.453 9.222 168.025 10.21C168.597 11.198 168.883 12.4027 168.883 13.824C168.883 15.2453 168.597 16.45 168.025 17.438C167.453 18.426 166.682 19.18 165.711 19.7C164.74 20.22 163.648 20.48 162.435 20.48ZM162.617 18.842C163.622 18.842 164.515 18.634 165.295 18.218C166.075 17.7847 166.69 17.1953 167.141 16.45C167.592 15.6873 167.817 14.812 167.817 13.824C167.817 12.836 167.592 11.9693 167.141 11.224C166.69 10.4787 166.075 9.898 165.295 9.482C164.515 9.04867 163.622 8.832 162.617 8.832C161.629 8.832 160.736 9.04867 159.939 9.482C159.159 9.898 158.544 10.4787 158.093 11.224C157.66 11.9693 157.443 12.836 157.443 13.824C157.443 14.812 157.66 15.6873 158.093 16.45C158.544 17.1953 159.159 17.7847 159.939 18.218C160.736 18.634 161.629 18.842 162.617 18.842ZM174.748 21V7.35H176.516V11.068L176.334 10.418C176.715 9.378 177.356 8.58933 178.258 8.052C179.159 7.49733 180.277 7.22 181.612 7.22V9.014C181.542 9.014 181.473 9.014 181.404 9.014C181.334 8.99667 181.265 8.988 181.196 8.988C179.757 8.988 178.63 9.43 177.816 10.314C177.001 11.1807 176.594 12.42 176.594 14.032V21H174.748ZM192.519 21V17.984L192.441 17.49V12.446C192.441 11.2847 192.111 10.392 191.453 9.768C190.811 9.144 189.849 8.832 188.567 8.832C187.683 8.832 186.842 8.97933 186.045 9.274C185.247 9.56867 184.571 9.95867 184.017 10.444L183.185 9.066C183.878 8.47667 184.71 8.026 185.681 7.714C186.651 7.38467 187.674 7.22 188.749 7.22C190.517 7.22 191.877 7.662 192.831 8.546C193.801 9.41267 194.287 10.7387 194.287 12.524V21H192.519ZM187.813 21.13C186.79 21.13 185.897 20.9653 185.135 20.636C184.389 20.2893 183.817 19.8213 183.419 19.232C183.02 18.6253 182.821 17.932 182.821 17.152C182.821 16.4413 182.985 15.8 183.315 15.228C183.661 14.6387 184.216 14.1707 184.979 13.824C185.759 13.46 186.799 13.278 188.099 13.278H192.805V14.656H188.151C186.833 14.656 185.915 14.89 185.395 15.358C184.892 15.826 184.641 16.4067 184.641 17.1C184.641 17.88 184.944 18.504 185.551 18.972C186.157 19.44 187.007 19.674 188.099 19.674C189.139 19.674 190.031 19.44 190.777 18.972C191.539 18.4867 192.094 17.7933 192.441 16.892L192.857 18.166C192.51 19.0673 191.903 19.7867 191.037 20.324C190.187 20.8613 189.113 21.13 187.813 21.13ZM206.347 21.13C205.168 21.13 204.102 20.8613 203.149 20.324C202.195 19.7693 201.433 18.9807 200.861 17.958C200.306 16.918 200.029 15.6527 200.029 14.162C200.029 12.6713 200.306 11.4147 200.861 10.392C201.415 9.352 202.169 8.56333 203.123 8.026C204.076 7.48867 205.151 7.22 206.347 7.22C207.647 7.22 208.808 7.51467 209.831 8.104C210.871 8.676 211.685 9.49067 212.275 10.548C212.864 11.588 213.159 12.7927 213.159 14.162C213.159 15.5487 212.864 16.762 212.275 17.802C211.685 18.842 210.871 19.6567 209.831 20.246C208.808 20.8353 207.647 21.13 206.347 21.13ZM199.301 26.044V7.35H201.069V11.458L200.887 14.188L201.147 16.944V26.044H199.301ZM206.217 19.492C207.187 19.492 208.054 19.2753 208.817 18.842C209.579 18.3913 210.186 17.7673 210.637 16.97C211.087 16.1553 211.313 15.2193 211.313 14.162C211.313 13.1047 211.087 12.1773 210.637 11.38C210.186 10.5827 209.579 9.95867 208.817 9.508C208.054 9.05733 207.187 8.832 206.217 8.832C205.246 8.832 204.371 9.05733 203.591 9.508C202.828 9.95867 202.221 10.5827 201.771 11.38C201.337 12.1773 201.121 13.1047 201.121 14.162C201.121 15.2193 201.337 16.1553 201.771 16.97C202.221 17.7673 202.828 18.3913 203.591 18.842C204.371 19.2753 205.246 19.492 206.217 19.492ZM223.89 7.22C224.999 7.22 225.97 7.43667 226.802 7.87C227.651 8.286 228.31 8.92733 228.778 9.794C229.263 10.6607 229.506 11.7527 229.506 13.07V21H227.66V13.252C227.66 11.8133 227.296 10.73 226.568 10.002C225.857 9.25667 224.852 8.884 223.552 8.884C222.581 8.884 221.732 9.08333 221.004 9.482C220.293 9.86333 219.738 10.4267 219.34 11.172C218.958 11.9 218.768 12.784 218.768 13.824V21H216.922V1.708H218.768V11.094L218.404 10.392C218.837 9.404 219.53 8.63267 220.484 8.078C221.437 7.506 222.572 7.22 223.89 7.22ZM234.342 26.174C233.701 26.174 233.085 26.07 232.496 25.862C231.924 25.654 231.43 25.342 231.014 24.926L231.872 23.548C232.219 23.8773 232.591 24.1287 232.99 24.302C233.406 24.4927 233.865 24.588 234.368 24.588C234.975 24.588 235.495 24.4147 235.928 24.068C236.379 23.7387 236.803 23.1493 237.202 22.3L238.086 20.298L238.294 20.012L243.91 7.35H245.73L238.892 22.638C238.511 23.522 238.086 24.224 237.618 24.744C237.167 25.264 236.673 25.628 236.136 25.836C235.599 26.0613 235.001 26.174 234.342 26.174ZM237.982 21.39L231.69 7.35H233.614L239.178 19.882L237.982 21.39Z" fill="#09061E"/>
                    <path d="M52.5509 16.47C52.5909 16.91 52.6209 17.29 52.6409 17.61C52.6609 17.91 52.6709 18.23 52.6709 18.57C52.6709 18.89 52.6609 19.22 52.6409 19.56C52.6209 19.88 52.5909 20.25 52.5509 20.67C52.0509 20.75 51.5509 20.82 51.0509 20.88C50.5509 20.94 50.0509 20.97 49.5509 20.97C49.0709 20.97 48.5909 20.94 48.1109 20.88C47.6309 20.82 47.1409 20.75 46.6409 20.67C46.5809 20.27 46.5409 19.91 46.5209 19.59C46.5009 19.25 46.4909 18.92 46.4909 18.6C46.4909 18.3 46.5009 17.98 46.5209 17.64C46.5409 17.3 46.5809 16.91 46.6409 16.47C47.6409 16.29 48.6309 16.2 49.6109 16.2C50.5909 16.2 51.5709 16.29 52.5509 16.47Z" fill="#E56509"/>
                </svg>

                    <p>Website Design</p>
                </div>
              </div>
              <div className="more-statemints" onClick={() => {
                    let path=`/statemints`
                    navigate(path);
                }}>
                <div className="mint-text-1">
                    <svg width="220" height="27" viewBox="0 0 220 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.35129 27C10.1253 27 11.5634 25.5579 11.5634 23.7791C11.5634 22.0002 10.1253 20.5581 8.35129 20.5581C6.5773 20.5581 5.1392 22.0002 5.1392 23.7791C5.1392 25.5579 6.5773 27 8.35129 27Z" fill="#E05959"/>
                        <path d="M7.70919 15.7776C7.70919 14.1485 9.02619 12.8279 10.6508 12.8279H30.4643C32.0889 12.8279 33.4059 14.1485 33.4059 15.7776V16.3201C33.4059 17.9491 32.0889 19.2698 30.4643 19.2698H10.6508C9.02619 19.2698 7.70919 17.9491 7.70919 16.3201V15.7776Z" fill="#5878A5"/>
                        <path d="M12.8484 23.5078C12.8484 21.8787 14.1654 20.5581 15.79 20.5581H34.3187C35.9433 20.5581 37.2603 21.8787 37.2603 23.5078V24.0503C37.2603 25.6794 35.9433 27 34.3187 27H15.79C14.1654 27 12.8484 25.6794 12.8484 24.0503V23.5078Z" fill="#3D4657"/>
                        <path d="M0 10.624C0 8.99496 1.317 7.67434 2.9416 7.67434H24.04C25.6646 7.67434 26.9816 8.99496 26.9816 10.624V11.1665C26.9816 12.7956 25.6646 14.1162 24.04 14.1162H2.9416C1.317 14.1162 0 12.7956 0 11.1665V10.624Z" fill="#B74848"/>
                        <path d="M46.9054 24.1797C48.7858 25.9471 51.7724 27 54.8696 27C59.8104 27 62.5758 24.5181 62.5758 21.1713C62.5758 16.6588 58.483 15.8315 55.4227 15.2298C53.4316 14.8162 52.0305 14.4025 52.0305 13.2744C52.0305 12.2215 53.1366 11.5822 54.8327 11.5822C57.0082 11.5822 59.0361 12.5223 60.1054 13.688L61.949 10.4164C60.216 8.98747 57.8193 7.93454 54.7959 7.93454C50.1132 7.93454 47.4953 10.6045 47.4953 13.6504C47.4953 17.9749 51.4406 18.727 54.5009 19.3287C56.5288 19.7423 58.0774 20.1936 58.0774 21.4721C58.0774 22.6003 57.1188 23.3148 55.0908 23.3148C52.8786 23.3148 50.2238 22.0738 48.9333 20.8329L46.9054 24.1797Z" fill="#3D4657"/>
                        <path d="M71.9988 27C73.9529 27 75.2066 26.4735 75.9071 25.8343L74.9116 22.2242C74.6535 22.4875 73.9898 22.7507 73.2893 22.7507C72.2569 22.7507 71.6669 21.8858 71.6669 20.7577V12.5599H75.2803V8.38579H71.6669V3.42201H66.9474V8.38579H63.9976V12.5599H66.9474V22.0362C66.9474 25.2702 68.7172 27 71.9988 27Z" fill="#3D4657"/>
                        <path d="M93.8596 26.5487V14.8162C93.8596 9.58914 90.1355 7.93454 86.0797 7.93454C83.2774 7.93454 80.4752 8.83705 78.2998 10.7925L80.0696 13.9889C81.5813 12.5599 83.3512 11.8454 85.2685 11.8454C87.6283 11.8454 89.1769 13.0487 89.1769 14.8914V17.4109C87.997 15.9443 85.8953 15.1922 83.5355 15.1922C80.6964 15.1922 77.3411 16.734 77.3411 20.9833C77.3411 25.0446 80.6964 27 83.5355 27C85.8584 27 87.9601 26.1351 89.1769 24.6685V26.5487H93.8596ZM89.1769 22.1866C88.4026 23.2396 86.9277 23.766 85.416 23.766C83.5724 23.766 82.0606 22.7883 82.0606 21.0961C82.0606 19.3663 83.5724 18.351 85.416 18.351C86.9277 18.351 88.4026 18.8774 89.1769 19.9304V22.1866Z" fill="#3D4657"/>
                        <path d="M104.477 27C106.432 27 107.685 26.4735 108.386 25.8343L107.39 22.2242C107.132 22.4875 106.468 22.7507 105.768 22.7507C104.736 22.7507 104.146 21.8858 104.146 20.7577V12.5599H107.759V8.38579H104.146V3.42201H99.426V8.38579H96.4763V12.5599H99.426V22.0362C99.426 25.2702 101.196 27 104.477 27Z" fill="#3D4657"/>
                        <path d="M109.82 17.4485C109.82 23.2772 113.912 27 119.333 27C122.098 27 124.863 26.1727 126.67 24.4805L124.605 21.3969C123.462 22.5251 121.508 23.202 119.849 23.202C116.825 23.202 115.019 21.2841 114.724 18.9903H127.961V17.9373C127.961 11.9958 124.347 7.93454 119.038 7.93454C113.618 7.93454 109.82 12.1838 109.82 17.4485ZM119.038 11.7326C122.135 11.7326 123.315 14.0265 123.425 15.7563H114.65C114.871 13.9513 116.125 11.7326 119.038 11.7326Z" fill="#3D4657"/>
                        <path d="M158.149 26.5487V13.4248C158.149 9.70195 156.194 7.93454 152.913 7.93454C150.184 7.93454 147.825 9.58914 146.792 11.2437C146.128 9.17549 144.469 7.93454 141.851 7.93454C139.123 7.93454 136.763 9.66435 136.026 10.7549V8.38579H131.343V26.5487H136.026V14.3273C136.726 13.312 138.09 12.1838 139.713 12.1838C141.63 12.1838 142.368 13.3872 142.368 15.0794V26.5487H147.087V14.2897C147.751 13.312 149.115 12.1838 150.774 12.1838C152.692 12.1838 153.429 13.3872 153.429 15.0794V26.5487H158.149Z" fill="#3D4657"/>
                        <path d="M165.064 5.71588C166.613 5.71588 167.866 4.43733 167.866 2.85794C167.866 1.27855 166.613 0 165.064 0C163.553 0 162.262 1.27855 162.262 2.85794C162.262 4.43733 163.553 5.71588 165.064 5.71588ZM167.424 26.5487V8.38579H162.741V26.5487H167.424Z" fill="#3D4657"/>
                        <path d="M188.77 26.5487V13.7256C188.77 10.1908 186.89 7.93454 182.981 7.93454C180.068 7.93454 177.893 9.36351 176.75 10.7549V8.38579H172.067V26.5487H176.75V14.3273C177.524 13.2368 178.962 12.1838 180.806 12.1838C182.797 12.1838 184.087 13.0487 184.087 15.5682V26.5487H188.77Z" fill="#3D4657"/>
                        <path d="M199.393 27C201.347 27 202.601 26.4735 203.301 25.8343L202.306 22.2242C202.048 22.4875 201.384 22.7507 200.683 22.7507C199.651 22.7507 199.061 21.8858 199.061 20.7577V12.5599H202.674V8.38579H199.061V3.42201H194.341V8.38579H191.392V12.5599H194.341V22.0362C194.341 25.2702 196.111 27 199.393 27Z" fill="#3D4657"/>
                        <path d="M204.33 24.1797C206.21 25.9471 209.197 27 212.294 27C217.235 27 220 24.5181 220 21.1713C220 16.6588 215.907 15.8315 212.847 15.2298C210.856 14.8162 209.455 14.4025 209.455 13.2744C209.455 12.2215 210.561 11.5822 212.257 11.5822C214.432 11.5822 216.46 12.5223 217.53 13.688L219.373 10.4164C217.64 8.98747 215.244 7.93454 212.22 7.93454C207.537 7.93454 204.92 10.6045 204.92 13.6504C204.92 17.9749 208.865 18.727 211.925 19.3287C213.953 19.7423 215.502 20.1936 215.502 21.4721C215.502 22.6003 214.543 23.3148 212.515 23.3148C210.303 23.3148 207.648 22.0738 206.358 20.8329L204.33 24.1797Z" fill="#3D4657"/>
                    </svg>
                    <p>Branding // Web & Mobile App // UX & UI Design</p>
                </div>
                <div className="mint-image">
                  <img src={statemintsImage} alt="statemints " width="186.88px" height="105px" />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        </Tabs>
      </div>
      <FooterMain />
  </div>    
  )
}
