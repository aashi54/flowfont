import React from "react";
import "./About.css";
import ScrollAnimation from "../ScrollAnimation";

const About: React.FC = () => {
  return (
    <>
      <div className="about-component">
        <div className="left-div">
          <img
            src="https://i.postimg.cc/gkvjp5gX/about-removebg-preview.png"
            className="left-div-img"
          />
        </div>
        <div className="right-div">
          {/* <div className='right-div-content'> */}
          <h1 className="right-div-heading">
           Why Everyone&apos;s Discussing Us?{" "}
          </h1>

          <div className="right-div-about">
            <ScrollAnimation>
            <div className="right-about-div1">
              <div className="svg-icon">
              <svg
                  width="46"
                  height="47"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8125 21.3125V20.75H19.6875C19.5383 20.75 19.3952 20.6907 19.2898 20.5852C19.1843 20.4798 19.125 20.3367 19.125 20.1875C19.125 20.0383 19.1843 19.8952 19.2898 19.7898C19.3952 19.6843 19.5383 19.625 19.6875 19.625H21.6562C21.88 19.625 22.0946 19.5361 22.2529 19.3779C22.4111 19.2196 22.5 19.005 22.5 18.7812C22.5 18.5575 22.4111 18.3429 22.2529 18.1846C22.0946 18.0264 21.88 17.9375 21.6562 17.9375H21.0937C20.5958 17.9395 20.1157 17.7523 19.7505 17.4139C19.3854 17.0754 19.1624 16.6109 19.1266 16.1142C19.0909 15.6176 19.2451 15.1259 19.5581 14.7386C19.8711 14.3514 20.3194 14.0974 20.8125 14.0281V13.4375C20.8125 13.2883 20.8718 13.1452 20.9772 13.0398C21.0827 12.9343 21.2258 12.875 21.375 12.875C21.5242 12.875 21.6673 12.9343 21.7727 13.0398C21.8782 13.1452 21.9375 13.2883 21.9375 13.4375V14H23.0625C23.2117 14 23.3548 14.0593 23.4602 14.1648C23.5657 14.2702 23.625 14.4133 23.625 14.5625C23.625 14.7117 23.5657 14.8548 23.4602 14.9602C23.3548 15.0657 23.2117 15.125 23.0625 15.125H21.0937C20.87 15.125 20.6554 15.2139 20.4971 15.3721C20.3389 15.5304 20.25 15.745 20.25 15.9688C20.25 16.1925 20.3389 16.4071 20.4971 16.5654C20.6554 16.7236 20.87 16.8125 21.0937 16.8125H21.6562C22.1542 16.8105 22.6343 16.9977 22.9994 17.3361C23.3646 17.6746 23.5876 18.1391 23.6234 18.6358C23.6591 19.1324 23.5049 19.6241 23.1919 20.0114C22.8789 20.3986 22.4306 20.6526 21.9375 20.7219V21.3125C21.9375 21.4617 21.8782 21.6048 21.7727 21.7102C21.6673 21.8157 21.5242 21.875 21.375 21.875C21.2258 21.875 21.0827 21.8157 20.9772 21.7102C20.8718 21.6048 20.8125 21.4617 20.8125 21.3125ZM33.4918 29.3619L23.7285 34.5054C22.6683 35.0639 21.4903 35.3619 20.292 35.3746C19.0938 35.3873 17.9097 35.1144 16.8379 34.5785L7.875 30.0971V30.3125C7.87455 30.7599 7.69662 31.1889 7.38025 31.5052C7.06388 31.8216 6.63492 31.9996 6.1875 32H1.6875C1.53832 32 1.39524 31.9407 1.28975 31.8352C1.18426 31.7298 1.125 31.5867 1.125 31.4375C1.125 31.2883 1.18426 31.1452 1.28975 31.0398C1.39524 30.9343 1.53832 30.875 1.6875 30.875H6.1875C6.33668 30.875 6.47976 30.8157 6.58525 30.7102C6.69074 30.6048 6.75 30.4617 6.75 30.3125V17.9375C6.75 17.7883 6.69074 17.6452 6.58525 17.5398C6.47976 17.4343 6.33668 17.375 6.1875 17.375H1.6875C1.53832 17.375 1.39524 17.3157 1.28975 17.2102C1.18426 17.1048 1.125 16.9617 1.125 16.8125C1.125 16.6633 1.18426 16.5202 1.28975 16.4148C1.39524 16.3093 1.53832 16.25 1.6875 16.25H6.1875C6.63492 16.2504 7.06388 16.4284 7.38025 16.7448C7.69662 17.0611 7.87455 17.4901 7.875 17.9375H12.1039C13.4988 17.9393 14.8525 18.4107 15.9469 19.2757L22.5253 24.4889C23.1174 24.9583 23.5038 25.6395 23.6031 26.3885L31.7115 24.5458C32.3246 24.4056 32.9677 24.4933 33.5208 24.7926C34.0739 25.0919 34.4992 25.5823 34.7172 26.1722C34.9352 26.762 34.9311 27.4111 34.7056 27.9982C34.4801 28.5853 34.0487 29.0696 33.4918 29.3619ZM33.6741 26.6079C33.5601 26.2624 33.3212 25.972 33.0043 25.7934C32.6874 25.6149 32.3152 25.5611 31.9607 25.6426L23.5316 27.5585C23.416 27.9876 23.2045 28.3849 22.913 28.7204C22.6216 29.0559 22.2578 29.3209 21.8491 29.4954C21.4403 29.6699 20.9973 29.7493 20.5534 29.7278C20.1095 29.7062 19.6763 29.5842 19.2864 29.3709L12.6675 25.7433C12.6027 25.7078 12.5456 25.6599 12.4993 25.6023C12.453 25.5447 12.4185 25.4786 12.3978 25.4077C12.3771 25.3368 12.3706 25.2625 12.3786 25.1891C12.3866 25.1156 12.409 25.0445 12.4445 24.9797C12.5162 24.8489 12.6369 24.7519 12.7801 24.7101C12.851 24.6893 12.9253 24.6828 12.9987 24.6908C13.0721 24.6988 13.1433 24.7212 13.2081 24.7567L19.827 28.3848C20.1963 28.5864 20.6241 28.6537 21.0374 28.5752C21.4508 28.4967 21.8241 28.2774 22.0939 27.9545C22.249 27.7686 22.3653 27.5535 22.436 27.3219C22.5067 27.0903 22.5303 26.8469 22.5054 26.6061C22.4805 26.3652 22.4076 26.1318 22.291 25.9196C22.1745 25.7073 22.0166 25.5206 21.8267 25.3704L15.2477 20.1571C14.3522 19.4495 13.2446 19.0639 12.1033 19.0625H7.875V28.8388L17.3407 33.5722C18.2553 34.0197 19.2617 34.2472 20.2798 34.2365C21.2979 34.2257 22.2994 33.9771 23.2042 33.5103L32.9676 28.3668C33.2755 28.2058 33.5158 27.9401 33.6453 27.6177C33.7748 27.2952 33.785 26.9372 33.6741 26.6079ZM23.2256 23.6086C23.3226 23.6854 23.4428 23.7273 23.5665 23.7273C23.6676 23.727 23.7667 23.6994 23.8534 23.6474C24.9738 23.2054 25.9555 22.4714 26.6965 21.5218C27.4375 20.5722 27.9107 19.4415 28.067 18.2471C28.2233 17.0528 28.0571 15.8384 27.5855 14.7301C27.1139 13.6217 26.3541 12.6598 25.3852 11.9443C24.4162 11.2288 23.2734 10.7857 22.0753 10.6611C20.8773 10.5365 19.6677 10.7349 18.5723 11.2358C17.4768 11.7366 16.5354 12.5216 15.8458 13.5092C15.1563 14.4967 14.7437 15.6509 14.6509 16.8519C14.6443 16.926 14.6525 17.0007 14.675 17.0717C14.6975 17.1426 14.7339 17.2084 14.782 17.2651C14.8301 17.3219 14.889 17.3686 14.9553 17.4025C15.0216 17.4363 15.0939 17.4567 15.1681 17.4624C15.2424 17.4681 15.317 17.459 15.3876 17.4356C15.4583 17.4123 15.5236 17.3751 15.5798 17.3264C15.6361 17.2776 15.682 17.2181 15.7151 17.1515C15.7482 17.0848 15.7677 17.0122 15.7725 16.9379C15.8501 15.9336 16.1962 14.9686 16.7744 14.1437C17.3527 13.3189 18.142 12.6646 19.0597 12.2492C19.9774 11.8339 20.9899 11.6727 21.9912 11.7826C22.9925 11.8924 23.9459 12.2693 24.7518 12.8738C25.5576 13.4783 26.1862 14.2882 26.5718 15.2188C26.9575 16.1494 27.086 17.1665 26.944 18.1638C26.802 19.1611 26.3947 20.1019 25.7646 20.8878C25.1345 21.6738 24.3048 22.276 23.3623 22.6316C23.2693 22.6669 23.1873 22.7263 23.1247 22.8037C23.0622 22.8811 23.0212 22.9737 23.0061 23.072C22.991 23.1704 23.0023 23.271 23.0388 23.3636C23.0753 23.4562 23.1357 23.5374 23.2138 23.5991L23.2256 23.6086ZM7.99875 11.5391C7.95117 11.4797 7.91613 11.4113 7.89575 11.338C7.87537 11.2647 7.87006 11.188 7.88016 11.1126C7.89025 11.0372 7.91554 10.9647 7.95449 10.8993C7.99343 10.834 8.04523 10.7772 8.10675 10.7324L20.0267 2.06375C20.4205 1.78369 20.8918 1.63321 21.375 1.63321C21.8582 1.63321 22.3295 1.78369 22.7233 2.06375L25.875 4.35594V2.1875C25.875 2.03832 25.9343 1.89524 26.0397 1.78975C26.1452 1.68426 26.2883 1.625 26.4375 1.625H30.9375C31.0867 1.625 31.2298 1.68426 31.3352 1.78975C31.4407 1.89524 31.5 2.03832 31.5 2.1875V8.44644L34.6432 10.7324C34.7048 10.7772 34.7567 10.834 34.7957 10.8994C34.8347 10.9648 34.86 11.0374 34.8701 11.1129C34.8802 11.1884 34.8749 11.2651 34.8545 11.3385C34.834 11.4118 34.7989 11.4802 34.7512 11.5396L33.12 13.5759C33.0295 13.6886 32.8991 13.7622 32.7559 13.7814C32.6126 13.8005 32.4674 13.7638 32.3505 13.6788L31.5 13.0601V23C31.5 23.1492 31.4407 23.2923 31.3352 23.3977C31.2298 23.5032 31.0867 23.5625 30.9375 23.5625C30.7883 23.5625 30.6452 23.5032 30.5397 23.3977C30.4343 23.2923 30.375 23.1492 30.375 23V12.2416L21.375 5.69525L12.375 12.2416V16.25C12.375 16.3992 12.3157 16.5423 12.2102 16.6477C12.1048 16.7532 11.9617 16.8125 11.8125 16.8125C11.6633 16.8125 11.5202 16.7532 11.4148 16.6477C11.3093 16.5423 11.25 16.3992 11.25 16.25V13.0606L10.3995 13.6794C10.2825 13.7643 10.1373 13.801 9.99403 13.7817C9.85075 13.7624 9.72039 13.6887 9.63 13.5759L7.99875 11.5391ZM27 5.17438L30.375 7.62912V2.75H27V5.17438ZM9.24525 11.2955L10.1722 12.4531L21.0442 4.54494C21.1403 4.47498 21.2561 4.43729 21.375 4.43729C21.4939 4.43729 21.6097 4.47498 21.7057 4.54494L32.5777 12.4531L33.5053 11.2955L22.0612 2.97331C21.8608 2.83076 21.621 2.75417 21.375 2.75417C21.129 2.75417 20.8892 2.83076 20.6887 2.97331L9.24525 11.2955Z"
                    fill="#0cfabb"
                  ></path>
                </svg>
              </div>
              <div className="title-d">
                <h2>Exceptional Customer Service</h2>
                <p>
                  We prioritize your satisfaction. Our dedicated customer
                  service team is ready to assist
                </p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation>
            <div className="right-about-div1">
              <div className="svg-icon">
              <svg
                  width="46"
                  height="47"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1092_7357)">
                    <path
                      d="M7.9639 9.21411C8.03345 9.21411 8.10232 9.20041 8.16658 9.17379C8.23083 9.14718 8.28922 9.10817 8.3384 9.05898C8.38758 9.0098 8.42659 8.95142 8.45321 8.88716C8.47983 8.8229 8.49353 8.75403 8.49353 8.68448V1.76326C8.49353 1.63241 8.59804 1.52606 8.72656 1.52606H27.2735C27.566 1.52606 27.8032 1.289 27.8032 0.996428C27.8032 0.70386 27.566 0.466797 27.2735 0.466797H8.72656C8.01403 0.466797 7.43427 1.0484 7.43427 1.76326V8.68448C7.43427 8.82495 7.49007 8.95966 7.58939 9.05898C7.68872 9.15831 7.82343 9.21411 7.9639 9.21411Z"
                      fill="#0076CE"
                    />
                    <path
                      d="M12.8995 9.03595H26.24C26.8559 9.03595 27.3569 8.53484 27.3569 7.91899V5.69313C27.3569 5.0772 26.8558 4.57617 26.24 4.57617H12.8995C12.2836 4.57617 11.7825 5.07727 11.7825 5.69313V7.91899C11.7825 8.53492 12.2836 9.03595 12.8995 9.03595ZM12.8417 5.69313C12.8417 5.66128 12.8676 5.63543 12.8994 5.63543H26.2399C26.2718 5.63543 26.2976 5.66128 26.2976 5.69313V7.91899C26.2976 7.93429 26.2915 7.94895 26.2807 7.95977C26.2699 7.97058 26.2552 7.97667 26.2399 7.97668H12.8995C12.8842 7.97668 12.8695 7.97061 12.8587 7.95979C12.8479 7.94897 12.8418 7.93429 12.8418 7.91899V5.69313H12.8417ZM12.3121 13.145H26.1028C26.3953 13.145 26.6324 12.9079 26.6324 12.6153C26.6324 12.3228 26.3953 12.0857 26.1028 12.0857H12.3121C12.0196 12.0857 11.7825 12.3228 11.7825 12.6153C11.7825 12.9079 12.0196 13.145 12.3121 13.145ZM12.3121 19.1667H19.9503C20.2428 19.1667 20.4799 18.9297 20.4799 18.6371C20.4799 18.3445 20.2428 18.1075 19.9503 18.1075H12.3121C12.0196 18.1075 11.7825 18.3445 11.7825 18.6371C11.7825 18.9297 12.0196 19.1667 12.3121 19.1667ZM12.3121 16.2621H26.1028C26.3953 16.2621 26.6324 16.025 26.6324 15.7325C26.6324 15.4399 26.3953 15.2028 26.1028 15.2028H12.3121C12.0196 15.2028 11.7825 15.4399 11.7825 15.7325C11.7825 16.025 12.0196 16.2621 12.3121 16.2621Z"
                      fill="#0076CE"
                    />
                    <path
                      d="M35.7299 11.0118C35.4908 10.5856 35.118 10.2534 34.666 10.058L34.8142 9.58386C35.0442 8.84789 34.6095 8.05203 33.8452 7.80967L33.4772 7.69301C33.0955 7.57211 32.694 7.60509 32.3466 7.78615C32.0492 7.94116 31.8248 8.19058 31.704 8.49431V1.76326C31.704 1.0484 31.1249 0.466797 30.4132 0.466797H29.6967C29.4066 0.466797 29.1538 0.690301 29.1451 0.980186C29.1429 1.05107 29.155 1.12168 29.1806 1.18781C29.2062 1.25394 29.2449 1.31425 29.2943 1.36516C29.3436 1.41607 29.4027 1.45655 29.4681 1.48419C29.5334 1.51182 29.6036 1.52606 29.6745 1.52606H30.4132C30.5409 1.52606 30.6448 1.63248 30.6448 1.76326V11.8665L29.6208 15.1429L29.6198 15.1456C29.6195 15.1466 29.6193 15.1477 29.619 15.1489L28.5849 18.4575L28.5839 18.4603L28.583 18.4637L28.1254 19.928C27.9346 20.5385 28.2021 21.1891 28.7347 21.532L28.401 22.5999C28.3159 22.8721 28.4478 23.1751 28.7151 23.2746C28.7743 23.2967 28.837 23.3081 28.9003 23.3082C29.0131 23.3081 29.123 23.272 29.2139 23.2051C29.3048 23.1382 29.3719 23.0441 29.4056 22.9364L29.7363 21.878C29.7976 21.8856 29.859 21.8905 29.9201 21.8905C30.1531 21.8905 30.3829 21.8351 30.5927 21.7257C30.6107 21.7163 30.6274 21.7053 30.6449 21.6953V28.6622H26.3189C25.6187 28.6622 25.049 29.2309 25.049 29.9299V34.4721H8.72668C8.5983 34.4721 8.49379 34.3654 8.49379 34.2344V32.5951C8.49379 32.5905 8.49322 32.586 8.49308 32.5815H11.2751C11.9643 32.5815 12.525 32.027 12.525 31.3455V25.6211H12.9113C13.2023 25.6211 13.4784 25.4668 13.6102 25.2073C13.7621 24.9081 13.7021 24.5529 13.467 24.3212L8.49386 19.4195V11.0613C8.49386 10.7712 8.27043 10.5183 7.98054 10.5097C7.90965 10.5075 7.83903 10.5196 7.7729 10.5452C7.70676 10.5708 7.64644 10.6094 7.59552 10.6588C7.5446 10.7082 7.50412 10.7673 7.47648 10.8326C7.44883 10.8979 7.43459 10.9681 7.4346 11.0391V18.3756L7.22621 18.1702C6.91803 17.8664 6.50753 17.9346 6.31404 18.3216V18.3216L0.226815 24.3211C-0.00848191 24.5529 -0.0685067 24.908 0.0835326 25.2073C0.215305 25.4667 0.491419 25.6211 0.782433 25.6211H1.16871V31.3455C1.16871 32.027 1.72941 32.5815 2.41864 32.5815H7.43523C7.43509 32.5861 7.43453 32.5905 7.43453 32.5951V34.2344C7.43453 34.9495 8.01415 35.5313 8.72668 35.5313H25.6184C25.7521 35.5313 26.1202 35.3162 26.1831 35.2514L31.4958 29.7817C31.5844 29.6906 31.6447 29.5757 31.6694 29.451C31.6923 29.391 31.7041 29.3274 31.7043 29.2632V19.5345L31.7282 19.458L31.7285 19.4573L31.7288 19.4559L32.7642 16.1432L32.7644 16.1427L32.7646 16.1418L34.3466 11.0798C34.5402 11.1855 34.6994 11.3399 34.8058 11.5295C34.9448 11.7779 34.977 12.0563 34.8967 12.3133L34.0658 14.972C34.0265 15.1054 34.0412 15.2488 34.1066 15.3715C34.1721 15.4941 34.2832 15.5861 34.4159 15.6275C34.5486 15.669 34.6922 15.6566 34.8159 15.5931C34.9395 15.5296 35.0333 15.4201 35.0769 15.2881L35.9078 12.6293C36.0758 12.0916 36.0128 11.5174 35.7299 11.0118ZM8.05758 31.5222H5.63611V28.1746H8.05758V31.5222ZM6.84692 19.2836L12.2022 24.5618H1.49157L6.84692 19.2836ZM2.22797 31.3455V25.621H11.4658V31.3455C11.4658 31.4429 11.3803 31.5222 11.2751 31.5222H9.11685V27.9722C9.11685 27.4997 8.72958 27.1154 8.25362 27.1154H5.44015C4.96419 27.1154 4.57692 27.4997 4.57692 27.9722V31.5222H2.41864C2.31356 31.5222 2.22797 31.4429 2.22797 31.3455ZM32.6796 8.90699C32.7103 8.80841 32.7817 8.7539 32.8362 8.72551C32.8935 8.69619 32.957 8.68113 33.0214 8.68158C33.0665 8.68158 33.1124 8.68865 33.157 8.70277L33.525 8.81943C33.7349 8.88595 33.8596 9.08714 33.8031 9.26792L31.9126 15.317L30.7877 14.9603L32.6796 8.90699ZM30.8767 18.6316L29.7518 18.275L30.4718 15.9714L31.5966 16.328L30.8767 18.6316ZM30.1034 20.7863C30.009 20.8356 29.8921 20.8438 29.7826 20.8091L29.4146 20.6924C29.2048 20.626 29.0801 20.4248 29.1365 20.244L29.436 19.286L30.5608 19.6426L30.2601 20.6048C30.2292 20.7034 30.1578 20.7579 30.1034 20.7863ZM26.1083 33.8081V29.9298C26.1083 29.8149 26.2028 29.7214 26.319 29.7214H30.0777L26.1083 33.8081Z"
                      fill="#0076CE"
                    />
                    <path
                      d="M17.1229 27.0093C17.1829 27.0312 17.2442 27.0416 17.3046 27.0416C17.4132 27.0415 17.5192 27.0081 17.6081 26.9459C17.6971 26.8836 17.7648 26.7955 17.8021 26.6935L18.2384 25.499C18.3004 25.7541 18.3562 25.9677 18.4051 26.1366C18.5166 26.5222 18.643 26.9593 19.0972 26.9593C19.3497 26.9593 19.4858 26.9592 21.0775 25.0911C21.6128 25.6797 22.5319 26.507 23.3949 26.4087C23.9166 26.3486 24.3257 26.0064 24.6865 25.7044C25.3168 25.1769 25.3635 25.2254 25.5607 25.4295C26.5535 26.4581 27.7664 26.1076 28.2689 25.7783C28.3278 25.7405 28.3787 25.6915 28.4185 25.6339C28.4583 25.5764 28.4864 25.5115 28.501 25.4431C28.5156 25.3747 28.5165 25.304 28.5036 25.2353C28.4908 25.1665 28.4645 25.1009 28.4261 25.0424C28.3878 24.9838 28.3383 24.9335 28.2803 24.8942C28.2224 24.8549 28.1573 24.8275 28.0888 24.8135C28.0202 24.7996 27.9496 24.7993 27.8809 24.8128C27.8122 24.8263 27.7469 24.8533 27.6888 24.8921C27.6593 24.9113 26.9617 25.3557 26.3229 24.6938C25.8118 24.1643 25.2997 24.179 24.9602 24.2845C24.5978 24.3972 24.2973 24.6487 24.0067 24.892C23.7479 25.1085 23.4802 25.3325 23.2738 25.3562C22.8863 25.4004 22.0454 24.6643 21.5025 23.9488C21.4545 23.8853 21.3928 23.8336 21.3221 23.7972C21.2514 23.7609 21.1734 23.7409 21.0939 23.7389C21.0144 23.7368 20.9355 23.7526 20.8629 23.7852C20.7904 23.8178 20.7261 23.8663 20.6749 23.9271C20.2211 24.466 19.7009 25.0643 19.3244 25.4773C19.1893 24.9438 19.0198 24.1825 18.883 23.5065C18.8601 23.3935 18.8009 23.2909 18.7144 23.2146C18.6279 23.1382 18.5188 23.0922 18.4038 23.0835C18.2887 23.0748 18.1739 23.1039 18.0769 23.1665C17.9799 23.229 17.906 23.3215 17.8664 23.4299L16.8072 26.3298C16.7833 26.3952 16.7725 26.4646 16.7754 26.5341C16.7784 26.6036 16.795 26.6719 16.8243 26.735C16.8536 26.7981 16.8951 26.8548 16.9463 26.9018C16.9975 26.9489 17.0575 26.9854 17.1229 27.0093Z"
                      fill="#0076CE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1092_7357">
                      <rect width="46" height="46" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="title-d">
                <h2>Extensive Network of Lenders</h2>
                <p>
                  We have established strong partnerships with a wide network of
                  reputable lenders
                </p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation>
            <div className="right-about-div1">
              <div className="svg-icon">
              <svg
                  width="46"
                  height="47"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1092_7378)">
                    <path
                      d="M19.8917 15.2541C20.4023 15.2541 20.8177 15.6019 20.8177 16.0294C20.8177 16.4177 21.1326 16.7326 21.5208 16.7326C21.9091 16.7326 22.224 16.4177 22.224 16.0294C22.224 15.0557 21.5383 14.229 20.5949 13.9493V13.8516C20.5949 13.4633 20.28 13.1484 19.8917 13.1484C19.5034 13.1484 19.1886 13.4633 19.1886 13.8516V13.9493C18.2451 14.229 17.5595 15.0557 17.5595 16.0294C17.5595 17.2324 18.6057 18.211 19.8917 18.211C20.4023 18.211 20.8177 18.5589 20.8177 18.9864C20.8177 19.4139 20.4023 19.7617 19.8917 19.7617C19.3812 19.7617 18.9658 19.4139 18.9658 18.9864C18.9658 18.5981 18.6509 18.2832 18.2627 18.2832C17.8744 18.2832 17.5595 18.5981 17.5595 18.9864C17.5595 19.9602 18.2451 20.7868 19.1886 21.0665V21.1642C19.1886 21.5525 19.5034 21.8673 19.8917 21.8673C20.28 21.8673 20.5949 21.5525 20.5949 21.1642V21.0665C21.5383 20.7868 22.224 19.9602 22.224 18.9864C22.224 17.7835 21.1777 16.8047 19.8917 16.8047C19.3812 16.8047 18.9658 16.457 18.9658 16.0294C18.9658 15.6019 19.3812 15.2541 19.8917 15.2541Z"
                      fill="#0cfabb"
                    ></path>
                    <path
                      d="M35.8942 23.4883C35.7596 23.0199 35.5001 22.5969 35.1434 22.2648C34.7867 21.9326 34.3463 21.7038 33.8695 21.603C33.2463 21.4703 32.5981 21.5671 32.0446 21.8613C32.3651 19.8682 32.1967 17.8065 31.5373 15.8847C31.4112 15.5174 31.0112 15.3221 30.6439 15.4479C30.2766 15.5739 30.081 15.9739 30.207 16.3412C30.986 18.6108 30.9923 21.1005 30.2292 23.3728L24.6257 28.3494C24.2828 28.6538 23.904 28.9153 23.4979 29.1281C23.6131 28.6629 23.6026 28.1753 23.4672 27.7155C23.36 27.3529 23.1779 27.0169 22.9327 26.729C22.6875 26.4412 22.3847 26.208 22.0438 26.0444L17.0798 23.6668C14.9096 22.6274 12.3696 22.5071 10.1109 23.3364L9.60634 23.5216C8.20581 19.5652 9.18066 15.1775 12.1799 12.1784L17.144 7.21435H22.6396L26.8456 11.4204C27.1202 11.6949 27.5653 11.6949 27.84 11.4204C28.1146 11.1458 28.1146 10.7006 27.84 10.4259L23.8213 6.40735L25.274 2.22657C25.4688 1.66609 25.2537 1.05463 24.751 0.739484C24.2484 0.424403 23.6041 0.49746 23.1846 0.916818L23.1759 0.925466C22.8853 1.21622 22.4122 1.21622 22.1216 0.925466C20.8875 -0.308489 18.8797 -0.308489 17.6456 0.925466C17.5048 1.06631 17.3176 1.14379 17.1184 1.14379C16.9193 1.14379 16.732 1.06624 16.5913 0.925466C16.1713 0.505476 15.5267 0.43277 15.0237 0.748835C14.5207 1.06483 14.3065 1.67713 14.5027 2.23782L15.9618 6.40777L11.1855 11.184C9.41783 12.9518 8.2428 15.1805 7.78758 17.6292C7.38826 19.7766 7.56124 21.9663 8.28513 24.0069L7.17661 24.4139C6.80774 23.9343 6.2287 23.6244 5.57836 23.6244H2.01572C0.904249 23.6244 0 24.5287 0 25.6401V33.9841C0 35.0955 0.904249 35.9998 2.01572 35.9998H20.5482C23.4591 35.9998 26.2118 34.8825 28.2993 32.8537L35.1844 26.1622C35.5343 25.8229 35.7852 25.3947 35.9102 24.9237C36.0353 24.4526 36.0297 23.9564 35.8942 23.4883ZM17.1184 2.55016C17.6931 2.55016 18.2335 2.32635 18.64 1.91993C19.3257 1.23422 20.4414 1.23422 21.1271 1.91993C21.5336 2.32635 22.074 2.55016 22.6488 2.55016C23.0569 2.55016 23.4475 2.43738 23.7853 2.22643L22.5408 5.80813H17.2419L15.9904 2.23178C16.3263 2.4392 16.7137 2.55016 17.1184 2.55016ZM1.4063 33.9841V25.6401C1.4063 25.304 1.67968 25.0307 2.01572 25.0307H5.57829C5.91432 25.0307 6.18771 25.304 6.18771 25.6401V33.9841C6.18771 34.3201 5.91432 34.5935 5.57829 34.5935H2.01572C1.67968 34.5935 1.4063 34.3202 1.4063 33.9841ZM34.2043 25.1538L27.3191 31.8453C25.4956 33.6175 23.091 34.5935 20.5482 34.5935H7.49957C7.56225 34.3965 7.5941 34.1909 7.594 33.9841V25.7588L10.5956 24.6567C12.5002 23.9574 14.6424 24.0588 16.4724 24.9353L21.4363 27.3129C21.7711 27.4732 22.0133 27.7576 22.1184 28.1137C22.2234 28.4698 22.1744 28.8402 21.9803 29.1567C21.8293 29.4034 21.5999 29.5923 21.3289 29.6932C21.0578 29.7941 20.7607 29.8011 20.4852 29.7131L13.8906 27.6161C13.5206 27.4985 13.1252 27.703 13.0074 28.0731C12.8898 28.4432 13.0943 28.8386 13.4644 28.9563L20.059 31.0533C20.3245 31.138 20.6015 31.1811 20.8802 31.1812C20.9131 31.1812 20.9459 31.1792 20.9786 31.178C22.6698 31.1537 24.293 30.5259 25.5594 29.4011L32.4578 23.2743C32.6084 23.1411 32.7879 23.0451 32.9822 22.9937C33.1765 22.9424 33.3801 22.9372 33.5767 22.9786C34.0481 23.0789 34.4092 23.4151 34.5427 23.8781C34.6765 24.341 34.5499 24.8179 34.2043 25.1538Z"
                      fill="#0cfabb"
                    ></path>
                    <path
                      d="M29.4435 13.9922C29.6285 13.9922 29.8099 13.9177 29.9406 13.7862C30.0721 13.6541 30.1461 13.4754 30.1467 13.2891C30.1467 13.1041 30.0714 12.9234 29.9406 12.792C29.8084 12.6606 29.6299 12.5866 29.4435 12.5859C29.2586 12.5859 29.0779 12.6612 28.9464 12.792C28.8152 12.9242 28.7412 13.1027 28.7404 13.2891C28.7404 13.4747 28.8156 13.6554 28.9464 13.7862C29.0784 13.9179 29.2571 13.992 29.4435 13.9922Z"
                      fill="#0cfabb"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1092_7378">
                      <rect width="36" height="36" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="title-d">
                <h2>Unbiased and Transparent Approach</h2>
                <p>
                  Transparency and objectivity are at the core of our values.
                  Our platform provides unbiased
                </p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation>
            <div className="right-about-div1">
              <div className="svg-icon">
              <svg
                  width="46"
                  height="47"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1092_7390)">
                    <path
                      d="M33.8586 22.6412C34.105 23.5141 34.2367 24.435 34.2367 25.3867C34.2367 30.9571 29.721 35.4727 24.1507 35.4727C21.1376 35.4727 18.4331 34.1515 16.585 32.0566M20.0111 8.36448C19.5936 8.15945 19.0751 8.22955 18.7278 8.57683L17.5344 9.77024C17.2106 10.094 16.7203 10.1918 16.3016 10.0063C16.1715 9.94863 16.0398 9.89413 15.9065 9.84287C15.479 9.67848 15.2015 9.26209 15.2015 8.80415V7.1163C15.2015 6.49874 14.7009 5.99805 14.0833 5.99805H11.536C10.9184 5.99805 10.4178 6.49867 10.4178 7.1163V8.80415C10.4178 9.26216 10.1403 9.67848 9.71285 9.84287C9.57954 9.89413 9.44777 9.94863 9.31769 10.0063C8.89898 10.1918 8.40869 10.0941 8.0849 9.77024L6.89156 8.57676C6.45485 8.14012 5.74687 8.14012 5.31016 8.57676L3.50897 10.378C3.07226 10.8147 3.07226 11.5227 3.50897 11.9594L4.70238 13.1528C5.02617 13.4766 5.1239 13.9669 4.93842 14.3856C4.88076 14.5157 4.82627 14.6474 4.77501 14.7808C4.61062 15.2083 4.19423 15.4857 3.73629 15.4857H2.04829C1.43074 15.4857 0.930115 15.9864 0.930115 16.6039V19.1513C0.930115 19.7688 1.43074 20.2694 2.04829 20.2694H3.73615C4.19416 20.2694 4.61048 20.547 4.77487 20.9744C4.826 21.1075 4.88049 21.2392 4.93828 21.3696C5.12383 21.7883 5.0261 22.2785 4.70224 22.6023L3.50883 23.7958C3.07211 24.2325 3.07211 24.9404 3.50883 25.3772L5.31002 27.1784C5.74673 27.6151 6.45471 27.6151 6.89142 27.1784L8.08483 25.985C8.40862 25.6612 8.89891 25.5635 9.31762 25.749C9.4477 25.8066 9.5794 25.8611 9.71278 25.9124C10.1403 26.0768 10.4177 26.4932 10.4177 26.9511V28.639C10.4177 29.2565 10.9184 29.7572 11.5359 29.7572H14.0833C14.7008 29.7572 15.2014 29.2566 15.2014 28.639V26.9511C15.2014 26.4931 15.479 26.0768 15.9064 25.9124C16.0397 25.8611 16.1715 25.8066 16.3016 25.749C16.6829 25.5799 17.1233 25.6467 17.4436 25.9045"
                      stroke="#0076CE"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7.95209 19.108C8.5006 21.2801 10.4672 22.8878 12.8096 22.8878C15.5767 22.8878 17.82 20.6447 17.82 17.8775C17.82 15.1104 15.5768 12.8672 12.8097 12.8672C10.4672 12.8672 8.50067 14.475 7.95216 16.647"
                      stroke="#0076CE"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M12.8097 20.3231C14.1599 20.3231 15.2545 19.2286 15.2545 17.8784C15.2545 16.5282 14.1599 15.4336 12.8097 15.4336C11.4595 15.4336 10.3649 16.5282 10.3649 17.8784C10.3649 19.2286 11.4595 20.3231 12.8097 20.3231Z"
                      stroke="#0076CE"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M29.0799 6.81662H24.277C24.2153 6.81662 24.1542 6.80447 24.0972 6.78087C24.0402 6.75726 23.9885 6.72267 23.9448 6.67905C23.9012 6.63544 23.8666 6.58366 23.843 6.52668C23.8194 6.46969 23.8073 6.40861 23.8073 6.34693V3.60165C23.8073 1.89102 22.4109 0.50938 20.7003 0.52752C20.5169 0.529483 20.3416 0.603737 20.2125 0.734158C20.0835 0.864579 20.0111 1.04064 20.0111 1.22411V3.02347M28.5141 20.2675H29.7308M20.0111 5.48441V16.4815C20.0111 17.6035 20.4996 18.6111 21.275 19.3043"
                      stroke="#0076CE"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M20.5331 31.0588C21.5777 31.7265 22.819 32.1136 24.1507 32.1136C27.8658 32.1136 30.8775 29.102 30.8775 25.3869C30.8775 21.6718 27.8658 18.6602 24.1507 18.6602C20.4356 18.6602 17.424 21.6718 17.424 25.3869C17.424 26.8806 17.9112 28.2604 18.7349 29.3767"
                      stroke="#0076CE"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M20.8256 25.0615L23.3698 27.9703L27.4759 23.323M33.8233 18.5857C33.8233 17.6571 33.0705 16.9043 32.1419 16.9043H29.7307C28.8021 16.9043 28.0493 17.6571 28.0493 18.5857C28.0493 19.5143 28.8021 20.2671 29.7307 20.2671H32.1419C33.0705 20.267 33.8233 19.5142 33.8233 18.5857Z"
                      stroke="#0076CE"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M33.3886 13.5419H29.0799C28.1513 13.5419 27.3986 14.2946 27.3986 15.2233C27.3986 16.1519 28.1513 16.9046 29.0799 16.9046H33.3886C34.3172 16.9046 35.07 16.1519 35.07 15.2233C35.07 14.2946 34.3172 13.5419 33.3886 13.5419ZM33.3886 6.81641H29.0799C28.1513 6.81641 27.3986 7.56917 27.3986 8.49779C27.3986 9.42641 28.1513 10.1792 29.0799 10.1792H33.3886C34.3172 10.1792 35.07 9.42641 35.07 8.49779C35.07 7.56917 34.3172 6.81641 33.3886 6.81641Z"
                      stroke="#0076CE"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M33.3886 10.1797H29.0799C28.1513 10.1797 27.3986 10.9325 27.3986 11.8611C27.3986 12.7897 28.1513 13.5425 29.0799 13.5425H33.3886C34.3172 13.5425 35.07 12.7897 35.07 11.8611C35.07 10.9325 34.3172 10.1797 33.3886 10.1797Z"
                      stroke="#0076CE"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1092_7390">
                      <rect width="36" height="36" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="title-d">
                <h2>Expertise and Knowledge</h2>
                <p>
                  Our team consists of financial experts with deep industry
                  knowledge
                </p>
              </div>
            </div>
            </ScrollAnimation>
          </div>

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default About;