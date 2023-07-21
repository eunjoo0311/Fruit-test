import apple from "../assets/apple.svg";
import cherry from "../assets/cherry.svg";
import blueberry from "../assets/blueberries.svg";
import yellowmelon from "../assets/yellow_melon.svg";
import kiwi from "../assets/kiwi.svg";
import peach from "../assets/peach.svg";
import pineapple from "../assets/pineapple.svg";
import pear from "../assets/pear.svg";
import banana from "../assets/banana.svg";
import watermelon from "../assets/watermelon.svg";
import strawberry from "../assets/strawberry.svg";
import lemon from "../assets/lemon.svg";
import grape from "../assets/grapes.svg";
import mango from "../assets/mango.svg";
import orange from "../assets/orange.svg";
import melon from "../assets/melon.svg";

const ResultList = [
  {
    id: "istj",
    title: "나는야 논리적인 사과",
    comment: "내가 말했잖아",
    img: apple,
    resultTxt:
      "주어진 일에 대해 맡으면 책임을 다하고 신중하게 처리하는 성격을 가지고 있습니다. 또한 현실적인 감각이 뛰어나며 말투도 직설적이기 때문에 때로는 딱딱하다는 평가를 듣기도 합니다. 또한 MBTI에 대해서는 근거 없는 유사과학이라고 생각하고 있습니다",
  },
  {
    id: "isfj",
    title: "나는 용감한 체리",
    comment: "걱정 하지마",
    img: cherry,
    resultTxt:
      "나서는 것을 좋아하지 않지만, 주목받고 관심을 받는 것은 즐겁게 여기는 성격을 가지고 있습니다. 또한 다른 사람들의 감정을 잘 캐치하고 공감해주는 능력을 갖추고 있습니다. 친절하고 착한 성품으로 인해 주변 사람들로부터 칭찬을 자주 받지만, 때로는 다른 사람들을 잘난척하거나 자만하는 태도를 보이는 사람들을 싫어합니다.",
  },
  {
    id: "infj",
    title: "나는 선한 블루베리",
    comment: "나는 괜찮아",
    img: blueberry,
    resultTxt:
      "신중하고 완벽주의적인 성향을 가지고 있습니다. 사람들 사이에서 직접 이끌고 리드하기보다는 그 사람이 좋아하는 말과 행동을 통해 주도권을 상대에게 넘겨줍니다. 기본적으로 모든 사람들에게 다정다감하고 친절하지만 그 이상은 선을 긋고 있어 차가우면서도 거리가이 있다고 느껴집니다.",
  },
  {
    id: "intj",
    title: "나는 전략적인 참외",
    comment: "그거 아님",
    img: yellowmelon,
    resultTxt:
      "독립적인 성향이 강하고 감정에 휘둘리는 것을 싫어합니다. 혼자서 모든 것을 해결하려는 의지가 강하고 목표를 달성하면 큰 행복감을 느낍니다. ",
  },
  {
    id: "intp",
    title: "나는 논리적인 키위",
    comment: "왜?",
    img: kiwi,
    resultTxt:
      "남에게 피해주는 것을 싫어하고 남에게 관심이 없습니다. 책 읽는 것을 좋아하지만 너무 게을러서 독서를 기피합니다. 친한 친구라도 별 일 없으면 연락을 잘 안하고 웬만한 일에 상처를 받지 않습니다.",
  },
  {
    id: "infp",
    title: "나는야 열정적인 복숭아",
    comment: "미안해..",
    img: peach,
    resultTxt:
      "대체적으로 적응력이 좋고 관대하고 개방적입니다. 말의 숨은 의도를 파악하려하고 의미 부여를 잘합니다. 공감능력이 뛰어나고 배려심이 좋습니다. 내향 유횽인데 사람들에게 관심하고 싶어하는 경향이 있습니다.",
  },
  {
    id: "isfp",
    title: "나는 호기심 많은 예술가",
    comment: "진짜?",
    img: pineapple,
    resultTxt:
      "발등에 불이 떨어져서 타들어가도록 일을 끝까지 미룹니다. 생각은 잘 하는데 생각한 것을 실천하지 않는 성향을 가지고 있습니다. 주변 의견, 주변 분위기에 잘 따라갑니다.",
  },
  {
    id: "istp",
    title: "나는 재주많은 배",
    comment: "굳이?",
    img: pear,
    resultTxt:
      "관심 있고 하고 싶은 것만 하는 성향이 있습니다. 일반적으로 조용하지만 필요에 의해서는 사교적입니다. 효율성을 엄청 따지고 노력도 절약하는 성향이 있습니다.",
  },
  {
    id: "estp",
    title: "나는 모험을 좋아하는 바나나",
    comment: "뭐해 나 심심해",
    img: banana,
    resultTxt:
      "눈치가 빠르지만 남의 눈치를 보지 않습니다. 경쟁, 내를 좋아하고 스릴이 있어야 재밌어합니다. 주변에 일어나는 일에 관심이 많고 깊게 생각하는 것을 머리 아프고 싫어합니다.",
  },
  {
    id: "esfp",
    title: "나는 자유로은 수박",
    comment: "헐.. 대박",
    img: watermelon,
    resultTxt:
      "싫고 좋은 사람 구분이 뚜렷하고 표정에 다 드러납니다. 정이 많고 건망증이 심합니다. 혼자 있으면 지루해서 무언가를 계속하고 있어야 합니다.",
  },
  {
    id: "enfp",
    title: "나는 재기발랄한 딸기",
    comment: "만약에 ~~다면?",
    img: strawberry,
    resultTxt:
      "긍정적이면 낙천적인 성격으로 인싸인 경우가 많습니다. 친구들과 잘 어울리고 다른 사람들과 같이 있는 것을 좋아합니다. 계획 세우기를 귀찮아하고 충동구매를 잘합니다. 한번 일을 하다보면 금세 싫증을 내는 일이 많습니다.",
  },
  {
    id: "entp",
    title: "나는 논쟁을 좋아하는 레몬",
    comment: "왜 안되는데?",
    img: lemon,
    resultTxt:
      "완벽주의자와는 거리가 멀고 관대하고 느긋한 삶을 가집니다. 직설적이고 솔직하게 표현하는 것에 거리낌이 없습니다. 재미가 인생의 원동력이라고 생각합니다.",
  },
  {
    id: "entj",
    title: "나는야 대담한 멜론",
    comment: "당연한거 아니야?",
    img: melon,
    resultTxt:
      "선척적인 리더인 경우가 많지만 나서서 하는 걸 좋아하는 게 아니라 다른 사람들이 하는게 마음에 안들어서 나서는 성향이 있습니다. 자기 비전이 매우 확고하고 자존감이 높습니다. 우유부단하고 선택 장애 있는 사람, 능력 없으면서 고집부리는 사람을 좋아하지 않습니다.",
  },
  {
    id: "enfj",
    title: "나는 정의로운 오렌지",
    comment: "힘내 화이팅",
    img: orange,
    resultTxt:
      "사람들을 이끄는 것에 타고난 기질이 있고 좋아합니다. 말로 사람의 마음을 움직이게 하는 능력이 탁월하고 오지랖이 심합니다. 인정과 칭찬을 받으면 좋지만 비판에는 민감하게 반응합니다.",
  },
  {
    id: "esfj",
    title: "나는 사교적인 망고",
    comment: "아냐 됐어",
    img: mango,
    resultTxt:
      "타고난 분위기 메이커로 새로운 사람을 사귀는 것도 좋아하고 같이 노는 것도 좋아합니다. 감정 기복이 심하고 감정이 얼굴에 다 드러나는 경우가 있습니다. 또한 아직 안 일어난 상황에 대해 미리 걱정합니다.",
  },
  {
    id: "estj",
    title: "나는 엄격한 포도",
    comment: "내가 할게",
    img: grape,
    resultTxt:
      "고집에 세고 이성적이며 직설적이면서 호불호가 확실합니다. 싸우는 걸 싫어하지만 싸워서 지는 걸 더 싫어합니다. 목표를 한번 정하면 이룰 때까지 한 우물만 팝니다.",
  },
];

export default ResultList;
