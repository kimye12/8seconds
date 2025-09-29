import "./MainFooter.css";

export default function MainFooter() {
  return (
    <footer>
      <div className="nav-area">
        <div className="inner">
          <div className="article-nav">
            <ul>
              <li>
                <a href="#">회사소개</a>
              </li>
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a href="#">
                  <em>개인정보 처리방침</em>
                </a>
              </li>
              <li>
                <a href="#">이메일무단수집거부</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">멤버십안내</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
              <li>
                <a href="#">매장찾기</a>
              </li>
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">단체주문</a>
              </li>
            </ul>
          </div>
          <div className="quick-nav">
            <ul>
              <li>
                <a href="#">입점신청</a>
              </li>
              <li>
                <a href="#">제휴문의</a>
              </li>
              <li>
                <a href="#">입점사 대여 프로그램</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="company-area">
        <div className="inner">
          <h1>삼성물산(주)패션부문</h1>
          <p>
            <span>주소: 서울특별시 강남구 남부순환로 2806(도곡동)</span>
            <span>대표 : 오세철 외 2명</span>
            <span>
              사업자 등록번호: 101-85-43600{" "}
              <a href="#" target="_blank">
                사업자 정보 확인
              </a>
            </span>
            <span>통신판매업 신고번호: 제 2015-서울강남-02894</span>
            <span>호스팅서비스: 삼성물산(주)패션부문</span>
          </p>
          <p>
            <span>
              KG모빌리언스 구매안전(에스크로)서비스{" "}
              <a href="#" target="_blank">
                서비스 가입사실 확인
              </a>{" "}
              고객님의 안전거래를 위해 현금 등으로 5만원 이상 결제 시 저희
              쇼핑몰에서 가입한 구매안전(에스크로) 서비스를 이용하실 수
              있습니다.
            </span>
          </p>
          <p>
            대표전화
            <em className="contact">1599-0007(전국)</em>
            <em className="contact">080-700-1472(수신자부담)</em> | 이메일:
            ssfshop@samsung.com
          </p>
          <p className="copyright">
            Copyright (C) 2025 Samsung C&T Corporation. All rights reserved
          </p>
          <div className="etc">
            <p className="ismsp">
              <a href="#">
                {" "}
                인증범위 : 패션부문 온라인 쇼핑몰 서비스 운영 (SSFSHOP,
                토리버치) | 유효기간 : 2022.08.12 ~ 2025.08.11
              </a>
            </p>
            <a
              href="#"
              className="youtube"
              role="button"
              aria-label="youtube"
            ></a>
            <a
              href="#"
              className="instagram"
              role="button"
              aria-label="instagram"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
