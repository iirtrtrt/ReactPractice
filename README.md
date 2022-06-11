node -v
v16.15.1
npm view react version
18.1.0

리액트를 이용하여 route를 구현 하였습니다.
네비게이션 바 에서 로고를 클릭할 경우 메인 페이지로 다시 로드가 되며, 다른 메뉴들을 클릭시에는 해당 페이지로 로드가 됩니다.
각 메뉴들에는 마우스 커서가 올라갈 경우 밑의 바가 생기도록 애니메이션을 넣어두었습니다.

![화면 캡처 2022-06-11 175413](https://user-images.githubusercontent.com/69069300/173181069-e894a6ce-f438-40fc-ac8a-300f4145ca1d.png)
![화면 캡처 2022-06-11 175424](https://user-images.githubusercontent.com/69069300/173181071-11479733-abc5-4f10-a854-765db6db520f.png)
![화면 캡처 2022-06-11 175436](https://user-images.githubusercontent.com/69069300/173181073-28664204-3482-4b62-b1dd-7193219d1b29.png)

About과 Tech를 클릭 시에는 간단하게 해당 페이지가 로드 되도록 하였고, Product와 Careers, Contact는 따로 지정해둔 값이 없어 에러 메세지가 표시될 수 있도록 하였습니다.

![화면 캡처 2022-06-11 175402](https://user-images.githubusercontent.com/69069300/173181112-58a633ed-3cf8-4173-9fac-4796bea5fe73.png)
![화면 캡처 2022-06-11 175455](https://user-images.githubusercontent.com/69069300/173181115-93c8c07d-d5db-42f5-99e0-d195b9cc4214.png)
![화면 캡처 2022-06-11 175506](https://user-images.githubusercontent.com/69069300/173181116-1b42ffaa-c5cd-4a90-982d-f0b19ff2b4f6.png)
![화면 캡처 2022-06-11 175339](https://user-images.githubusercontent.com/69069300/173181117-cb7dea23-591b-4e01-b0c6-5338e4d58057.png)

그리고 화면의 작아졌을 때의 메인 페이지를 간단하게 구현 하였습니다.
화면의 최소 가로길이는 768px로 지정하였으며, 768px크기가 됐을 때 네비게이션 바의 색상이 바뀌고 메뉴들은 서랍속으로 들어가도록 하였습니다.
