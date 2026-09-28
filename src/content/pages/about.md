---
title: 소개
---

## 안녕하세요, 빡고수입니다

이 블로그는 개발자 빡고수(GitHub: [CodeBBakGoSu](https://github.com/CodeBBakGoSu))가 공부하고, 무언가를 만들고, 일하면서 배운 것을 적어 두는 곳입니다.

시작은 2023년 1월이었습니다. 전역하고 맥북을 한 대 산 뒤 "개발자로서 기록을 시작해 보자"는 짧은 글을 올린 게 첫 글이었고, 그 뒤로 학교 과제, 백준 문제 풀이, 딥러닝 공부 노트, 인턴 회고가 하나씩 쌓이면서 지금의 블로그가 됐습니다.

대학에서는 주로 AI와 파이썬을 공부했습니다. 2025년 7월부터는 교육 스타트업 글로랑에서 8개월 동안 백엔드 개발 인턴으로 일하면서 Kotlin과 Spring을 처음 실무에서 다뤘고, Python과 Nest.js로 된 서비스도 맡았습니다. 최근에는 CCTV와 센서 데이터를 비전 AI가 분석하고, 그 결과를 운영자에게 실시간으로 전달하는 AI 관제 모듈의 백엔드를 만들고 있습니다.

## 주로 쓰는 글

-   AI 코딩 도구와 에이전트: Claude Code, Codex, OpenCode, SpecKit 같은 도구를 실제 업무에 써 보고 느낀 점을 비교합니다. 바이브 코딩에서 한 걸음 더 나아가 스펙 주도 개발(SDD)이나 Harness Engineering처럼 에이전트를 안정적으로 쓰는 방법에도 관심이 많습니다.
-   LLM 서비스와 RAG: 대학생용 AI 챗봇 '강냉봇'을 만들면서 부딪힌 RAG 설계, LangGraph 기반 질문 라우팅, 세션과 메모리 설계 고민을 정리합니다.
-   백엔드 개발: Kotlin 문법, 구글 로그인과 CORS, XSS와 CSP 같은 웹 보안, DB 커넥션 문제 해결, 그리고 비전 AI와 백엔드 사이 통신 방식을 gRPC로 정한 과정 같은 실무 기록입니다.
-   인턴과 커리어: 스타트업 백엔드 인턴 2달차·5달차 후기와 인턴 마무리 회고, 대외활동(그루터기 같이에듀 3기) 후기를 남겼습니다.
-   AI 공부와 투자: '밑바닥부터 시작하는 딥러닝 3' 정리, 머신러닝·딥러닝 개념 정리, AI 산업 보고서를 읽고 투자 관점에서 정리한 글도 가끔 씁니다.

## 먼저 읽어 보면 좋은 글

### [대학교 AI 챗봇 프로젝트 회고 1편 - 강냉봇 기획, RAG 설계, 개발 후기](/posts/43/)

캡스톤디자인 수업에서 시작한 대학생 전용 챗봇 강냉봇의 V1 회고입니다. 왜 이 문제를 골랐는지, LangGraph로 질문을 개인·공통·일반 세 흐름으로 나눈 이유, 질문을 그대로 검색에 넣으면 안 되는 RAG의 현실, 그리고 개인화에 너무 일찍 욕심을 냈던 판단까지 솔직하게 적었습니다.

### [비전 AI와 백엔드 통신 방식 고민: TCP+웹소켓에서 gRPC로 바꾼 이유](/posts/42/)

비전 AI 서버가 초당 3~4프레임씩 만들어 내는 이벤트를 백엔드가 어떻게 받아야 할지, REST·gRPC·TCP·UDP를 지연시간, 메시지 구조, 확장성 기준으로 비교했습니다. POC에서 쓰던 TCP+웹소켓 구조를 gRPC로 바꾸기로 한 과정을 담았습니다.

### [AI 에이전트가 똑똑해지려면 무엇이 필요한가: 세션과 메모리의 모든 것](/posts/30/)

Kaggle AI Agents Intensive에서 다룬 Context Engineering 백서(Sessions & Memory)를 정리한 글입니다. 강냉봇에서 겪던 서브에이전트 전환 문제와 사용자별 세션 관리 문제를 풀 실마리를 찾는다는 관점으로 읽었습니다.

### [SpecKit 완벽 가이드 - AI와 함께하는 스펙 주도 개발(SDD)](/posts/35/)

바이브 코딩으로는 원하는 기능이 잘 나오지 않던 경험에서 출발해, GitHub의 오픈소스 SpecKit으로 스펙 주도 개발을 해 본 기록입니다. AI 시대에 개발자에게 설계와 검증 역량이 왜 더 중요해지는지도 함께 생각해 봤습니다.

### [Claude Code 시리즈 #1 - 현업 경험으로 본 Claude Code 첫인상과 앞으로의 목표](/posts/36/)

Kotlin·Spring 스타트업 인턴으로 Cursor에 기대어 개발하던 시기부터, Skills·MCP·Hook·Subagent를 알게 되며 Claude Code를 다시 보게 된 계기까지 정리한 시리즈 첫 글입니다.

### [스타트업에서 Claude Code,Open code 대신 Codex를 선택한 이유](/posts/39/)

기존 코드와 컨벤션에 맞춰 필요한 부분만 고치는 일이 많은 업무를 기준으로 Claude Code, OpenCode, Codex를 비교했습니다. 사용량 한도, 모델을 바꿔 가며 쓰는 피로감, 작은 수정의 정확도에서 차이가 컸습니다.

인턴 생활 전체를 돌아본 글은 [글로랑 인턴 후기: 스타트업 협업, 애자일, 그리고 개발자로서 배운 것들](/posts/41/)에 정리해 두었습니다.

## 프로젝트: 강냉봇

강냉봇은 학사일정, 졸업요건, 수업 정보, 셔틀버스 시간표처럼 분명 어딘가에 있지만 찾기 어려운 학교 정보를 학생이 자연어로 묻고 답을 받을 수 있게 만든 대학생용 AI 챗봇입니다. 2025년 3월 캡스톤디자인 수업에서 기획해 Streamlit, LangGraph, Supabase로 V1을 만들었고, 이후 V2로 구조를 다시 잡았습니다.

-   서비스: [https://kang-naeng-bot-fe.vercel.app/](https://kang-naeng-bot-fe.vercel.app/)
-   코드: [https://github.com/CodeBBakGoSu/kangnam\_Unv\_chatbot](https://github.com/CodeBBakGoSu/kangnam_Unv_chatbot)

## 다뤄 본 기술

Kotlin, Spring, Python, FastAPI, Nest.js, PostgreSQL, SQLAlchemy, gRPC, React, LangChain, LangGraph, Supabase, Streamlit, 그리고 Claude Code·Codex·Cursor 같은 AI 코딩 도구.

## 연락과 링크

-   GitHub: [https://github.com/CodeBBakGoSu](https://github.com/CodeBBakGoSu)
-   이메일: kpj45123@gmail.com
-   문의: [연락처](/contact/)

글에 틀린 내용이 있거나 더 이야기해 보고 싶은 주제가 있다면 [연락처](/contact/)에 적힌 이메일로 알려 주세요. 확인하는 대로 답하겠습니다.
