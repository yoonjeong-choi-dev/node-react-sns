### [0.2.0]

> 개발 시작

- 디렉터리 추가
  - shared : 전체 프로젝트에서 공유하는 변수/설정
    - config.js : 외부 리소스 호스트 이름과 관련된 변수들
  - apis
    - axios 모듈을 래핑한 CRUD 프로미스 반환 함수들



### [0.1.0]

> 뼈대 작성

- CRA를 사용하여 리액트 앱 구성
- 기본 디렉터리 구성
  - component : 페이지를 구성하는 요소
  - page : 라우팅에 대한 기본 요소
- 스타일 관련
  - antd 모듈의 컴포넌트를 기본적으로 사용
  - css는 styled-components 방식 사용
- CompentTestContainer.js
  - 각 컴포넌트의 렌더링 테스트를 위한 컨테이너
- 엔드포인트 설정
  - 개발용 : config.dev.js
  - 배포용 : config.prod.js
- 0.2.0 계획
  - 컴포넌트 단위로 개발
  - 각 컴포넌트에 필요한 데이터 구조를 `/public/data`에 작성
  - 개발/배포 환경에 따른 설정 파일(*.config.js) 임포트 방식