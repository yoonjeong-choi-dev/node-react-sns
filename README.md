# Fullstack SNS with Node.js and React

## Summary
* Node.js와 React를 이용한 풀스택 SNS 애플리케이션
* 인스타그램을 베이스로 하여 필수 기능 구현
* 주 목적은 백엔드 구현
* 프론트엔드 소스는 추후 다른 프레임워크를 이용한 백엔드 구현 시 이용

## Directory
* 백엔드 및 프론트엔드로 나누어서 구현
  * 각 디렉터리의 CHANGELOG.md에 추가/변경 사항에 대한 히스토리 기록
  * 로컬 테스트를 위한 .env.development는 깃에 저장
* Server
 * Node.js + Express를 사용한 백엔드 애플리케이션
 * 사용 예정인 외부 서비스
  * AWS RDS
  * redis
  * S3 : 정적 리소스 저장
* Client
  * React를 사용한 프론트엔드 애플리케이션
  * 백엔드 애플리케이션 검증용
  * 우선 페이지/컴포넌트/유틸로 구조화
    * 이후 세분화

## Plan
* 기본적인 뼈대 잡기
  * 백엔드 및 프론트엔드에 필요한 모듈 설치 및 디렉터리 설정
* 프론트엔드 로컬 개발
  * 인스타그램을 참고하여 컴포넌트 및 페이지 개발
  * public 디렉터리를 이용하여 fake data 접근
    * api endpoint를 리액트 웹서버로 설정(config.json)
    * 데이터 CRUD 및 이미지 저장을 위한 api 추상화 필요
  * 개발하면서 백엔드에 필요한 api 및 데이터 구조 정립
* 백엔드 로컬 개발
  * 프론트엔드 개발에서 정립된 api 및 데이터를 이용하여 구현
  * DB 및 파일 스토리지는 로컬로 구현
  * 개발하면서 프론트엔드 수정
* 배포용 개발
  * AWS RDS, redis, s3 등 실제 운영시 필요한 외부 서비스 설정
  * (TODO) 운영을 위한 클라우드 서비스 리서치 및 travis-ci 연동