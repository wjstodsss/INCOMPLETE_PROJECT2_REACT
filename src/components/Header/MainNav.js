import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown";

const MAIN_NAV_Title = ["SHOP", "EVENT", "ARCHIVE", "SPONSORSHIP", "ONE SPEC"];
const DROP_SHOP_SHOES_SUB = [
  "러닝화",
  "워킹화",
  "스포츠화",
  "트레킹화",
  "스니커즈",
  "샌들/슬리퍼",
  "기타",
];
const DROP_SHOP_MEN_SUB = [
  "티셔츠",
  "스웻셔츠&후디",
  "아우터",
  "팬츠&타이즈",
  "숏팬츠",
  "트레이닝 상/하",
  "기타",
];
const DROP_SHOP_WOMEN_SUB = [
  "티셔츠",
  "스웻셔츠&후디",
  "아우터",
  "스포츠 브라",
  "팬츠&레깅스",
  "숏팬츠&스커트",
  "트레이닝 상/하",
  "기타",
];
const DROP_SHOP_BAG_ACC_SUB = [
  "가방",
  "모자 & 헤드밴드",
  "양말",
  "장갑 & 암가드",
  "홈트레이닝",
  "라켓스포츠",
  "기타",
];
const DROP_SHOP_KIDS_SUB = ["신발", "의류", "용품"];
const DROP_SHOP_SALE_SUB = ["신발", "남성의류", "여성의류", "용품"];
const DROP_SHOP_ALL_TITLE = [
  DROP_SHOP_SHOES_SUB,
  DROP_SHOP_MEN_SUB,
  DROP_SHOP_WOMEN_SUB,
  DROP_SHOP_BAG_ACC_SUB,
  DROP_SHOP_KIDS_SUB,
  DROP_SHOP_SALE_SUB,
];
const SUB_TITLE = [
  "SHOES",
  "MEN",
  "WOMEN",
  "BAG/ACC",
  "KIDS",
  "SALE",
  "BEST50",
  "GIFT CARD",
];

const MainNav = () => {
  return (
    <div className="header-wrap">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="div-logo-01">Pro<br/>GGOLDDOOGI<br/>SPEC'S</div>
          <div className="div-nav-01">
            {MAIN_NAV_Title.map((title) => (
              <text className="title-nav-01">{title}</text>
            ))}
          </div>
          <div className="div-nav-02">DOTBOGI<br/>JANGBAGUNI<br/>LOGIN</div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {SUB_TITLE.map((title, index) => (
            <ul>
              <Dropdown.Item href="#/action-1" className="btn-products">{title}</Dropdown.Item>
              {DROP_SHOP_ALL_TITLE[index] && DROP_SHOP_ALL_TITLE[index].map((detailCategory) => (
                <Dropdown.Item href="#/action-2">
                  {detailCategory}
                </Dropdown.Item>
              ))}
            </ul>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MainNav;
