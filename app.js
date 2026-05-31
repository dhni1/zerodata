const schools = [
  {
    id: "apgujeong",
    name: "압구정고",
    region: "서울",
    district: "강남구",
    type: "대도시",
    courses: { 2024: 62, 2025: 68 },
    groups: { science: 14, ai: 8, humanities: 18, arts: 7, language: 5 },
    schoolCourses: ["인공지능 기초", "데이터 과학", "심리학", "고급 생명과학", "미디어 콘텐츠 일반", "국제경제"],
    demand: { "고급 물리학": 5, "데이터 과학": 8, "프로그래밍": 9, "심리학": 11 },
  },
  {
    id: "hwigyeong",
    name: "휘경여고",
    region: "서울",
    district: "동대문구",
    type: "대도시",
    courses: { 2024: 55, 2025: 59 },
    groups: { science: 10, ai: 5, humanities: 19, arts: 8, language: 6 },
    schoolCourses: ["심리학", "생명과학 실험", "사회문제 탐구", "일본어 회화", "미술 전공 실기"],
    demand: { "인공지능 기초": 7, "데이터 과학": 6, "고급 화학": 4, "국제경제": 9 },
  },
  {
    id: "yangjae",
    name: "양재고",
    region: "서울",
    district: "서초구",
    type: "대도시",
    courses: { 2024: 58, 2025: 63 },
    groups: { science: 13, ai: 7, humanities: 17, arts: 6, language: 5 },
    schoolCourses: ["인공지능 기초", "프로그래밍", "고급 화학", "국제경제", "영상 제작의 이해"],
    demand: { "데이터 과학": 9, "고급 물리학": 6, "심리학": 8, "미디어 콘텐츠 일반": 5 },
  },
  {
    id: "sanggye",
    name: "상계고",
    region: "서울",
    district: "노원구",
    type: "대도시",
    courses: { 2024: 50, 2025: 54 },
    groups: { science: 9, ai: 4, humanities: 18, arts: 7, language: 4 },
    schoolCourses: ["데이터 과학", "사회문제 탐구", "생활과 과학", "중국어 회화", "음악 감상과 비평"],
    demand: { "인공지능 기초": 10, "프로그래밍": 7, "고급 생명과학": 6, "국제경제": 5 },
  },
  {
    id: "myeongji",
    name: "명지고",
    region: "서울",
    district: "서대문구",
    type: "대도시",
    courses: { 2024: 53, 2025: 57 },
    groups: { science: 10, ai: 5, humanities: 17, arts: 8, language: 5 },
    schoolCourses: ["심리학", "국제경제", "미디어 콘텐츠 일반", "생명과학 실험", "일본어 회화"],
    demand: { "인공지능 기초": 6, "데이터 과학": 8, "프로그래밍": 6, "고급 물리학": 4 },
  },
  {
    id: "suwon",
    name: "수원고",
    region: "경기",
    district: "수원시",
    type: "수도권 중핵",
    courses: { 2024: 51, 2025: 56 },
    groups: { science: 12, ai: 6, humanities: 15, arts: 6, language: 4 },
    schoolCourses: ["데이터 과학", "고급 물리학", "세계문제와 미래사회", "영상 제작의 이해", "중국어 회화"],
    demand: { "인공지능 기초": 8, "심리학": 6, "고급 생명과학": 5, "프로그래밍": 10 },
  },
  {
    id: "pocheon",
    name: "포천일고",
    region: "경기",
    district: "포천시",
    type: "수도권 외곽",
    courses: { 2024: 37, 2025: 40 },
    groups: { science: 7, ai: 2, humanities: 13, arts: 5, language: 2 },
    schoolCourses: ["사회문제 탐구", "생명과학 실험", "일본어 회화", "음악 감상과 비평"],
    demand: { "인공지능 기초": 9, "데이터 과학": 5, "고급 물리학": 6, "프로그래밍": 8 },
  },
  {
    id: "bundang",
    name: "분당고",
    region: "경기",
    district: "성남시",
    type: "수도권 중핵",
    courses: { 2024: 57, 2025: 61 },
    groups: { science: 13, ai: 8, humanities: 15, arts: 6, language: 4 },
    schoolCourses: ["인공지능 기초", "데이터 과학", "프로그래밍", "고급 생명과학", "국제경제"],
    demand: { "고급 물리학": 7, "고급 화학": 5, "심리학": 6, "영상 제작의 이해": 4 },
  },
  {
    id: "goyang",
    name: "고양일고",
    region: "경기",
    district: "고양시",
    type: "수도권 중핵",
    courses: { 2024: 52, 2025: 55 },
    groups: { science: 11, ai: 5, humanities: 16, arts: 7, language: 5 },
    schoolCourses: ["고급 물리학", "사회문제 탐구", "미디어 콘텐츠 일반", "중국어 회화", "생활과 과학"],
    demand: { "인공지능 기초": 8, "데이터 과학": 7, "프로그래밍": 9, "심리학": 5 },
  },
  {
    id: "icheon",
    name: "이천고",
    region: "경기",
    district: "이천시",
    type: "수도권 외곽",
    courses: { 2024: 43, 2025: 46 },
    groups: { science: 8, ai: 3, humanities: 14, arts: 6, language: 3 },
    schoolCourses: ["데이터 과학", "생명과학 실험", "스포츠 생활", "일본어 회화"],
    demand: { "인공지능 기초": 7, "프로그래밍": 6, "고급 화학": 5, "국제경제": 4 },
  },
  {
    id: "anseong",
    name: "안성고",
    region: "경기",
    district: "안성시",
    type: "수도권 외곽",
    courses: { 2024: 40, 2025: 43 },
    groups: { science: 8, ai: 2, humanities: 13, arts: 5, language: 2 },
    schoolCourses: ["사회문제 탐구", "고급 화학", "문예 창작 입문", "생활과 과학"],
    demand: { "인공지능 기초": 8, "데이터 과학": 6, "고급 물리학": 5, "심리학": 7 },
  },
  {
    id: "jeonju",
    name: "전주고",
    region: "전북",
    district: "전주시",
    type: "중소도시",
    courses: { 2024: 49, 2025: 52 },
    groups: { science: 11, ai: 5, humanities: 16, arts: 5, language: 4 },
    schoolCourses: ["고급 화학", "데이터 과학", "국제경제", "문예 창작 입문", "스포츠 생활"],
    demand: { "인공지능 기초": 7, "심리학": 10, "고급 생명과학": 5, "프로그래밍": 4 },
  },
  {
    id: "muju",
    name: "무주고",
    region: "전북",
    district: "무주군",
    type: "농산어촌",
    courses: { 2024: 31, 2025: 34 },
    groups: { science: 6, ai: 1, humanities: 10, arts: 4, language: 2 },
    schoolCourses: ["사회문제 탐구", "생활과 과학", "음악 감상과 비평"],
    demand: { "인공지능 기초": 6, "데이터 과학": 4, "고급 화학": 5, "심리학": 7 },
  },
  {
    id: "iksan",
    name: "이리고",
    region: "전북",
    district: "익산시",
    type: "중소도시",
    courses: { 2024: 44, 2025: 48 },
    groups: { science: 10, ai: 4, humanities: 15, arts: 5, language: 3 },
    schoolCourses: ["인공지능 기초", "고급 생명과학", "사회문제 탐구", "중국어 회화"],
    demand: { "데이터 과학": 7, "프로그래밍": 5, "고급 물리학": 6, "심리학": 8 },
  },
  {
    id: "gunsan",
    name: "군산고",
    region: "전북",
    district: "군산시",
    type: "중소도시",
    courses: { 2024: 46, 2025: 50 },
    groups: { science: 10, ai: 4, humanities: 16, arts: 6, language: 3 },
    schoolCourses: ["데이터 과학", "고급 화학", "국제경제", "영상 제작의 이해", "일본어 회화"],
    demand: { "인공지능 기초": 6, "프로그래밍": 6, "고급 생명과학": 5, "심리학": 7 },
  },
  {
    id: "namwon",
    name: "남원고",
    region: "전북",
    district: "남원시",
    type: "중소도시",
    courses: { 2024: 38, 2025: 41 },
    groups: { science: 7, ai: 2, humanities: 14, arts: 5, language: 2 },
    schoolCourses: ["심리학", "사회문제 탐구", "생활과 과학", "문예 창작 입문"],
    demand: { "인공지능 기초": 7, "데이터 과학": 5, "고급 화학": 6, "국제경제": 4 },
  },
  {
    id: "buan",
    name: "부안고",
    region: "전북",
    district: "부안군",
    type: "농산어촌",
    courses: { 2024: 32, 2025: 35 },
    groups: { science: 6, ai: 1, humanities: 11, arts: 4, language: 2 },
    schoolCourses: ["생활과 과학", "음악 감상과 비평", "스포츠 생활"],
    demand: { "인공지능 기초": 5, "데이터 과학": 5, "프로그래밍": 4, "심리학": 6 },
  },
  {
    id: "chuncheon",
    name: "춘천고",
    region: "강원",
    district: "춘천시",
    type: "중소도시",
    courses: { 2024: 45, 2025: 49 },
    groups: { science: 10, ai: 4, humanities: 15, arts: 5, language: 3 },
    schoolCourses: ["고급 생명과학", "심리학", "데이터 과학", "세계문제와 미래사회", "미디어 콘텐츠 일반"],
    demand: { "인공지능 기초": 8, "고급 물리학": 7, "프로그래밍": 5, "국제경제": 4 },
  },
  {
    id: "yeongwol",
    name: "영월고",
    region: "강원",
    district: "영월군",
    type: "농산어촌",
    courses: { 2024: 29, 2025: 32 },
    groups: { science: 5, ai: 1, humanities: 10, arts: 4, language: 1 },
    schoolCourses: ["생활과 과학", "사회문제 탐구", "스포츠 생활"],
    demand: { "인공지능 기초": 5, "데이터 과학": 5, "고급 물리학": 4, "심리학": 6 },
  },
  {
    id: "wonju",
    name: "원주고",
    region: "강원",
    district: "원주시",
    type: "중소도시",
    courses: { 2024: 48, 2025: 51 },
    groups: { science: 11, ai: 5, humanities: 15, arts: 5, language: 3 },
    schoolCourses: ["데이터 과학", "고급 물리학", "국제경제", "미디어 콘텐츠 일반", "중국어 회화"],
    demand: { "인공지능 기초": 7, "프로그래밍": 6, "고급 화학": 5, "심리학": 5 },
  },
  {
    id: "gangneung",
    name: "강릉고",
    region: "강원",
    district: "강릉시",
    type: "중소도시",
    courses: { 2024: 43, 2025: 47 },
    groups: { science: 9, ai: 3, humanities: 15, arts: 6, language: 3 },
    schoolCourses: ["인공지능 기초", "생명과학 실험", "사회문제 탐구", "영상 제작의 이해"],
    demand: { "데이터 과학": 6, "프로그래밍": 5, "고급 물리학": 7, "국제경제": 4 },
  },
  {
    id: "sokcho",
    name: "속초고",
    region: "강원",
    district: "속초시",
    type: "중소도시",
    courses: { 2024: 39, 2025: 42 },
    groups: { science: 8, ai: 2, humanities: 13, arts: 6, language: 2 },
    schoolCourses: ["고급 생명과학", "심리학", "미디어 콘텐츠 일반", "생활과 과학"],
    demand: { "인공지능 기초": 6, "데이터 과학": 5, "프로그래밍": 4, "고급 화학": 5 },
  },
  {
    id: "taebaek",
    name: "태백고",
    region: "강원",
    district: "태백시",
    type: "농산어촌",
    courses: { 2024: 30, 2025: 33 },
    groups: { science: 5, ai: 1, humanities: 10, arts: 4, language: 1 },
    schoolCourses: ["사회문제 탐구", "생활과 과학", "음악 감상과 비평"],
    demand: { "인공지능 기초": 5, "데이터 과학": 4, "고급 물리학": 5, "심리학": 5 },
  },
];

const jointCourses = [
  { course: "인공지능 기초", group: "ai", region: "서울", provider: "서울 온라인 공동교육과정", mode: "온라인", capacity: 18 },
  { course: "데이터 과학", group: "ai", region: "경기", provider: "경기 공동교육 캠퍼스", mode: "혼합", capacity: 20 },
  { course: "프로그래밍", group: "ai", region: "경기", provider: "경기 북부 거점학교", mode: "온라인", capacity: 16 },
  { course: "고급 물리학", group: "science", region: "강원", provider: "강원 과학 심화 공동과정", mode: "혼합", capacity: 14 },
  { course: "고급 화학", group: "science", region: "전북", provider: "전북 학교연계 공동교육과정", mode: "오프라인", capacity: 15 },
  { course: "심리학", group: "humanities", region: "전북", provider: "전북 온라인 공동교육과정", mode: "온라인", capacity: 20 },
  { course: "국제경제", group: "humanities", region: "서울", provider: "서울 거점형 선택과목", mode: "혼합", capacity: 18 },
  { course: "미디어 콘텐츠 일반", group: "arts", region: "강원", provider: "강원 예술 융합 공동과정", mode: "온라인", capacity: 16 },
  { course: "생명과학 실험", group: "science", region: "서울", provider: "서울 실험중심 공동과정", mode: "오프라인", capacity: 14 },
];

const courseMeta = {
  "인공지능 기초": { group: "ai", field: "공학·AI" },
  "데이터 과학": { group: "ai", field: "공학·AI" },
  프로그래밍: { group: "ai", field: "공학·AI" },
  "고급 물리학": { group: "science", field: "자연과학" },
  "고급 화학": { group: "science", field: "자연과학" },
  "고급 생명과학": { group: "science", field: "자연과학" },
  "생명과학 실험": { group: "science", field: "자연과학" },
  "생활과 과학": { group: "science", field: "자연과학" },
  심리학: { group: "humanities", field: "인문사회" },
  국제경제: { group: "humanities", field: "인문사회" },
  "사회문제 탐구": { group: "humanities", field: "인문사회" },
  "세계문제와 미래사회": { group: "humanities", field: "인문사회" },
  "미디어 콘텐츠 일반": { group: "arts", field: "예술·미디어" },
  "영상 제작의 이해": { group: "arts", field: "예술·미디어" },
  "문예 창작 입문": { group: "arts", field: "예술·미디어" },
  "미술 전공 실기": { group: "arts", field: "예술·미디어" },
  "음악 감상과 비평": { group: "arts", field: "예술·미디어" },
  "스포츠 생활": { group: "arts", field: "예술·미디어" },
  "중국어 회화": { group: "language", field: "국제·언어" },
  "일본어 회화": { group: "language", field: "국제·언어" },
};

const groupLabels = {
  science: "과학",
  ai: "정보·AI",
  humanities: "인문사회",
  arts: "예술·미디어",
  language: "국제·언어",
};

const $ = (selector) => document.querySelector(selector);
let runFeedbackTimer;

function buttonContent(icon, label) {
  return `<span class="material-symbols-outlined" aria-hidden="true">${icon}</span>${label}`;
}

function withSubjectParticle(text) {
  const lastChar = text.trim().charCodeAt(text.trim().length - 1);
  const hasFinalConsonant = lastChar >= 0xac00 && lastChar <= 0xd7a3 && (lastChar - 0xac00) % 28 !== 0;
  return `${text}${hasFinalConsonant ? "과" : "와"}`;
}

function withObjectParticle(text) {
  const lastChar = text.trim().charCodeAt(text.trim().length - 1);
  const hasFinalConsonant = lastChar >= 0xac00 && lastChar <= 0xd7a3 && (lastChar - 0xac00) % 28 !== 0;
  return `${text}${hasFinalConsonant ? "을" : "를"}`;
}

function uniqueCourses() {
  return Array.from(new Set([...jointCourses.map((item) => item.course), ...schools.flatMap((school) => school.schoolCourses)])).sort((a, b) =>
    a.localeCompare(b, "ko"),
  );
}

function getCourseMeta(course) {
  return courseMeta[course] || { group: "humanities", field: "상관없음" };
}

function fieldMatches(course, field) {
  if (field === "상관없음") return true;
  return getCourseMeta(course).field === field;
}

function hostSchools(course, currentSchool) {
  return schools.filter((school) => school.id !== currentSchool.id && school.schoolCourses.includes(course));
}

function demandPartners(course, currentSchool) {
  return schools
    .filter((school) => school.id !== currentSchool.id && !school.schoolCourses.includes(course))
    .map((school) => ({ school, demand: school.demand[course] || 0 }))
    .filter((item) => item.demand > 0)
    .sort((a, b) => b.demand - a.demand);
}

function estimateSchoolDemand(school, course, field) {
  const directDemand = school.demand[course];
  if (directDemand) {
    return { count: directDemand, source: "학교 희망 과목 데이터 기반 자동 산정" };
  }

  const meta = getCourseMeta(course);
  const inSchool = school.schoolCourses.includes(course);
  const similarDemands = Object.entries(school.demand)
    .filter(([demandCourse]) => getCourseMeta(demandCourse).group === meta.group)
    .map(([, demand]) => demand);
  const similarAverage = similarDemands.length
    ? Math.round(similarDemands.reduce((sum, demand) => sum + demand, 0) / similarDemands.length)
    : 0;
  const groupStrength = school.groups[meta.group] || 2;
  const fieldBonus = fieldMatches(course, field) ? 2 : 0;

  if (inSchool) {
    return {
      count: Math.min(18, Math.max(8, similarAverage || Math.round(groupStrength * 0.75))),
      source: "교내 개설 이력과 같은 과목군 수요 기반 자동 산정",
    };
  }

  return {
    count: Math.min(16, Math.max(3, similarAverage || Math.round(groupStrength * 0.8) + fieldBonus)),
    source: "비슷한 과목군과 희망 진로 기반 자동 산정",
  };
}

function courseDemand(course) {
  return schools.reduce((sum, school) => sum + (school.demand[course] || 0), 0);
}

function openingPriority() {
  return uniqueCourses()
    .map((course) => {
      const meta = getCourseMeta(course);
      const hosts = schools.filter((school) => school.schoolCourses.includes(course));
      const missing = schools.filter((school) => !school.schoolCourses.includes(course));
      const demand = courseDemand(course);
      const joint = jointCourses.find((item) => item.course === course);
      const regionCount = new Set(missing.map((school) => school.region)).size;
      const score = demand * 4 + missing.length * 3 + regionCount * 4 - hosts.length * 2 + (joint ? 6 : 0);
      return { course, meta, hosts, missing, demand, joint, score };
    })
    .filter((item) => item.demand > 0 || item.joint)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function schoolGapRecommendations(school, field) {
  return uniqueCourses()
    .filter((course) => !school.schoolCourses.includes(course))
    .map((course) => {
      const meta = getCourseMeta(course);
      const joint = jointCourses.find((item) => item.course === course);
      const hosts = hostSchools(course, school);
      const partners = demandPartners(course, school);
      const ownDemand = school.demand[course] || 0;
      const peerDemand = partners.slice(0, 3).reduce((sum, item) => sum + item.demand, 0);
      const regionHosts = hosts.filter((item) => item.region === school.region).length;
      const fieldBonus = fieldMatches(course, field) ? 10 : 0;
      const score = ownDemand * 6 + peerDemand * 2 + hosts.length * 2 + regionHosts * 4 + (joint ? 8 : 0) + fieldBonus;
      return { course, meta, joint, hosts, partners, ownDemand, peerDemand, regionHosts, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}

function createRouteAnalysis() {
  const school = schools.find((item) => item.id === $("#matcherSchool").value) || schools[0];
  const course = $("#matcherCourse").value;
  const field = $("#careerField").value;
  const meta = getCourseMeta(course);
  const inSchool = school.schoolCourses.includes(course);
  const demandEstimate = estimateSchoolDemand(school, course, field);
  const studentCount = demandEstimate.count;
  const joint = jointCourses.find((item) => item.course === course);
  const hosts = hostSchools(course, school);
  const regionalHost = hosts.find((item) => item.region === school.region);
  const partners = demandPartners(course, school);
  const pickedPartners = partners.slice(0, 3);
  const partnerDemand = pickedPartners.reduce((sum, item) => sum + item.demand, 0);
  const combinedDemand = studentCount + partnerDemand;
  const sameRegionJoint = joint?.region === school.region;
  const onlineRoute = joint?.mode === "온라인";
  const careerFit = fieldMatches(course, field);
  const externalRoute =
    inSchool ? "교내" : sameRegionJoint ? "지역 공동교육과정" : onlineRoute ? "온라인 공동강좌" : joint ? "타지역 공동교육과정" : regionalHost ? "인근 학교" : "신규 개설";

  let score = inSchool ? 88 : 46;
  if (joint) score += 18;
  if (sameRegionJoint || regionalHost) score += 10;
  if (onlineRoute) score += 8;
  if (combinedDemand >= 12) score += 12;
  if (combinedDemand >= 18) score += 5;
  if (careerFit) score += 8;
  score = Math.min(99, score);

  let badge = "개설 우선 검토";
  let badgeClass = "status-high";
  let summary = "현재 등록된 공동강좌가 없어 교육청 신규 개설 후보로 묶는 것이 좋습니다.";
  if (inSchool) {
    badge = "교내 수강 가능";
    badgeClass = "status-low";
    summary = `${school.name} 교육과정 안에서 ${withObjectParticle(course)} 바로 수강할 수 있습니다. 진로 심화 과목을 함께 추천합니다.`;
  } else if (joint && combinedDemand >= 12) {
    badge = "공동수강 추천";
    badgeClass = "status-low";
    summary = `${withSubjectParticle(joint.provider)} ${pickedPartners.length ? "주변 학교 수요" : "온라인 수요"}를 연결하면 개설 기준에 근접합니다.`;
  } else if (joint || regionalHost) {
    badge = "대체 경로 있음";
    badgeClass = "status-mid";
    summary = joint ? `${joint.provider}로 연결할 수 있지만 추가 모집이 필요합니다.` : `${regionalHost.name} 개설 과목과 연계 수강을 검토할 수 있습니다.`;
  }

  return {
    school,
    course,
    field,
    studentCount,
    demandSource: demandEstimate.source,
    meta,
    inSchool,
    joint,
    hosts,
    regionalHost,
    partners,
    pickedPartners,
    combinedDemand,
    careerFit,
    externalRoute,
    score,
    badge,
    badgeClass,
    summary,
  };
}

function renderOptions() {
  $("#matcherSchool").innerHTML = schools.map((school) => `<option value="${school.id}">${school.name} · ${school.region} ${school.district}</option>`).join("");
  $("#matcherCourse").innerHTML = uniqueCourses().map((course) => `<option value="${course}">${course}</option>`).join("");
  $("#matcherSchool").value = "pocheon";
  $("#matcherCourse").value = "인공지능 기초";
  $("#careerField").value = "공학·AI";
}

function routeSteps(analysis) {
  if (analysis.inSchool) {
    return [
      `${analysis.school.name} 교육과정에서 ${analysis.course} 개설 확인`,
      "담임·교육과정 담당 교사에게 수강 신청",
      `${analysis.field} 진로에 맞는 심화 과목 추가 선택`,
    ];
  }

  const external = analysis.joint
    ? `${analysis.joint.provider} ${analysis.joint.mode} 강좌 확인`
    : analysis.regionalHost
      ? `${analysis.regionalHost.name} 연계 수강 가능 여부 확인`
      : "교육청 공동강좌 신규 개설 후보 등록";
  return [
    `${analysis.school.name}에는 ${analysis.course} 미개설`,
    external,
    `${analysis.pickedPartners.length ? analysis.pickedPartners.map((item) => item.school.name).join(", ") : "온라인 모집"} 수요와 묶어 ${analysis.combinedDemand}명 규모로 신청`,
  ];
}

function buildAiRecommendation(analysis) {
  const sameRegionPartners = analysis.pickedPartners.filter((item) => item.school.region === analysis.school.region);
  const partnerLabel = analysis.pickedPartners.length
    ? analysis.pickedPartners.map((item) => `${item.school.name} ${item.demand}명`).join(", ")
    : "추가 모집 수요";
  const routeLabel = analysis.inSchool
    ? "교내 수강"
    : analysis.joint
      ? `${analysis.joint.mode} 공동교육과정`
      : analysis.regionalHost
        ? "인근 학교 연계"
        : "신규 공동강좌 개설";
  const confidence = Math.min(99, Math.max(58, analysis.score + (analysis.careerFit ? 0 : -6) + (analysis.combinedDemand >= 12 ? 3 : -4)));

  let title = `${routeLabel}을 1순위로 추천`;
  if (analysis.inSchool) title = "교내 수강 + 진로 심화 조합 추천";
  if (!analysis.inSchool && !analysis.joint && !analysis.regionalHost) title = "교육청 신규 개설 요청 추천";

  const summary = analysis.inSchool
    ? `${analysis.course}은 이미 ${analysis.school.name}에 개설되어 있어 수강 가능성이 높습니다. AI는 같은 진로군의 심화 과목을 함께 묶어 학습 경로를 만드는 방안을 추천합니다.`
    : `${analysis.school.name}의 ${analysis.course} 미개설 상태, ${analysis.combinedDemand}명 결합 수요, ${analysis.externalRoute} 가능성을 함께 계산해 ${routeLabel} 경로를 추천합니다.`;

  const reasons = [
    analysis.inSchool
      ? "학교 교육과정에 이미 포함되어 이동 부담과 개설 불확실성이 가장 낮습니다."
      : `${analysis.school.name} 자체 수요 ${analysis.studentCount}명에 ${partnerLabel}을 결합할 수 있습니다.`,
    analysis.inSchool
      ? `${analysis.school.name} 안에서 바로 신청할 수 있어 상담과 시간표 조정이 단순합니다.`
      : analysis.joint
      ? `${analysis.joint.provider}에 ${analysis.course} 강좌가 있어 기존 공동교육 인프라를 활용할 수 있습니다.`
      : analysis.regionalHost
        ? `${analysis.regionalHost.name}에서 이미 운영 중이라 학교 간 연계 후보가 있습니다.`
        : "현재 공동강좌가 적어 교육청 개설 우선순위 후보로 올리는 편이 적합합니다.",
    analysis.careerFit
      ? `${analysis.course}은 ${analysis.field} 진로와 직접 연결되는 과목입니다.`
      : `${analysis.course}과 ${analysis.field} 진로의 직접 연결성이 낮아 보완 과목 조합이 필요합니다.`,
    sameRegionPartners.length
      ? `같은 권역에서 ${sameRegionPartners.length}개 학교 수요가 확인되어 이동·운영 부담이 낮습니다.`
      : analysis.joint?.mode === "온라인"
        ? "온라인 방식이라 지역 차이에 따른 이동 부담을 줄일 수 있습니다."
        : `${analysis.school.region} 권역 내 수요가 약해 추가 모집 또는 온라인 전환 검토가 필요합니다.`,
  ];

  const risks = [
    analysis.combinedDemand >= 12
      ? "결합 수요는 충분한 편이지만 실제 신청 전환율 확인이 필요합니다."
      : "결합 수요가 낮아 최소 개설 인원에 못 미칠 수 있습니다.",
    analysis.inSchool
      ? "교내 개설 과목도 학년별 시간표와 선택군 충돌 여부를 확인해야 합니다."
      : analysis.joint?.mode === "오프라인"
      ? "오프라인 공동교육과정은 이동 시간과 시간표 충돌을 먼저 확인해야 합니다."
      : "온라인 또는 혼합 경로는 평가 방식과 출결 기준 확인이 필요합니다.",
    analysis.careerFit
      ? "진로 적합도는 높지만 후속 심화 과목까지 이어지는지 확인해야 합니다."
      : "희망 진로와 과목군이 다르므로 상담 단계에서 선택 이유를 보완해야 합니다.",
  ];

  const actions = [
    analysis.inSchool
      ? `${analysis.school.name} 수강 신청 기간에 ${analysis.course}을 1순위로 등록`
      : `${analysis.school.name} 수요 ${analysis.studentCount}명과 연결 학교 수요를 묶어 공동수강 신청서 작성`,
    analysis.inSchool
      ? `교육과정 담당 교사와 ${analysis.course} 선택군, 평가 방식, 후속 과목을 확인`
      : analysis.joint
      ? `${analysis.joint.provider}의 ${analysis.joint.mode} 운영 일정과 정원을 확인`
      : analysis.regionalHost
        ? `${analysis.regionalHost.name} 담당자에게 연계 수강 가능 여부 확인`
        : `${analysis.region || analysis.school.region} 교육청에 ${analysis.course} 신규 공동강좌 개설 요청`,
    analysis.careerFit
      ? `${analysis.field} 진로 포트폴리오에 연결할 수행평가·탐구 주제까지 함께 설계`
      : `${analysis.field} 진로에 맞는 보완 과목을 1개 이상 추가 추천`,
  ];

  return { title, summary, confidence, reasons, risks, actions };
}

function renderAiRecommendation(analysis) {
  const report = buildAiRecommendation(analysis);
  $("#aiRecommendationTitle").textContent = report.title;
  $("#aiRecommendationSummary").textContent = report.summary;
  $("#aiConfidence").textContent = `${report.confidence}%`;
  $("#aiRecommendationReasons").innerHTML = report.reasons.map((item) => `<li>${item}</li>`).join("");
  $("#aiRiskList").innerHTML = report.risks.map((item) => `<li>${item}</li>`).join("");
  $("#aiActionPlan").innerHTML = report.actions.map((item) => `<li>${item}</li>`).join("");
}

function renderResult() {
  const analysis = createRouteAnalysis();
  $("#studentDemandLabel").textContent = `${analysis.studentCount}명`;
  $("#studentDemandNote").textContent = analysis.demandSource;
  $("#routeBadge").textContent = analysis.badge;
  $("#routeBadge").className = `status-badge ${analysis.badgeClass}`;
  $("#matchScore").textContent = `${analysis.score}점`;
  $("#matchTitle").textContent = `${analysis.school.name} · ${analysis.course}`;
  $("#matchSummary").textContent = analysis.summary;
  $("#schoolAvailability").textContent = analysis.inSchool ? "개설" : "미개설";
  $("#combinedDemand").textContent = `${analysis.combinedDemand}명`;
  $("#externalRoute").textContent = analysis.externalRoute;
  $("#routeSteps").innerHTML = routeSteps(analysis).map((step, index) => `<article><b>${index + 1}</b><span>${step}</span></article>`).join("");

  renderRecommendationCards(analysis);
  renderAiRecommendation(analysis);
  renderCareerCourses(analysis);
  renderPartners(analysis);
  renderSchoolGaps(analysis);
  renderPriorityGrid();
}

function renderRecommendationCards(analysis) {
  const cards = [
    {
      title: analysis.inSchool ? "교내 수강" : "1순위 경로",
      body: analysis.inSchool
        ? `${analysis.school.name}에서 바로 신청`
        : analysis.joint
          ? `${analysis.joint.provider} · ${analysis.joint.mode}`
          : analysis.regionalHost
            ? `${analysis.regionalHost.name} 연계 수강`
            : "교육청 신규 공동강좌 개설 요청",
      meta: analysis.inSchool ? "가장 빠른 경로" : `${analysis.externalRoute} 추천`,
    },
    {
      title: "수요 묶기",
      body: analysis.pickedPartners.length
        ? [`${analysis.school.name} ${analysis.studentCount}명`, ...analysis.pickedPartners.map((item) => `${item.school.name} ${item.demand}명`)].join(" + ")
        : `${analysis.school.name} ${analysis.studentCount}명`,
      meta: `${analysis.combinedDemand}명 결합`,
    },
    {
      title: "진로 적합도",
      body: analysis.careerFit ? `${analysis.field} 진로와 직접 연결되는 과목입니다.` : `${analysis.field} 진로 보완 과목을 함께 추천합니다.`,
      meta: groupLabels[analysis.meta.group],
    },
  ];

  $("#recommendationCards").innerHTML = cards
    .map(
      (card) => `
        <article class="info-card">
          <strong>${card.title}</strong>
          <span>${card.body}</span>
          <em>${card.meta}</em>
        </article>
      `,
    )
    .join("");
}

function renderCareerCourses(analysis) {
  const sameFieldCourses = uniqueCourses()
    .filter((course) => course !== analysis.course && fieldMatches(course, analysis.field))
    .slice(0, 4);
  const fallbackCourses = uniqueCourses()
    .filter((course) => course !== analysis.course && getCourseMeta(course).group === analysis.meta.group)
    .slice(0, 4);
  const courses = (sameFieldCourses.length ? sameFieldCourses : fallbackCourses).slice(0, 3);

  $("#careerCourseList").innerHTML = [analysis.course, ...courses]
    .map((course, index) => {
      const available = analysis.school.schoolCourses.includes(course);
      const joint = jointCourses.find((item) => item.course === course);
      const path = available ? "교내" : joint ? joint.mode : "개설 요청";
      return `
        <article>
          <span>${index === 0 ? "희망" : "추천"}</span>
          <strong>${course}</strong>
          <em>${path}</em>
        </article>
      `;
    })
    .join("");
}

function renderPartners(analysis) {
  const hostItems = analysis.hosts.slice(0, 2).map((school) => ({
    name: school.name,
    region: `${school.region} ${school.district}`,
    note: "이미 개설",
  }));
  const demandItems = analysis.pickedPartners.map((item) => ({
    name: item.school.name,
    region: `${item.school.region} ${item.school.district}`,
    note: `${item.demand}명 수요`,
  }));
  const items = [...hostItems, ...demandItems].slice(0, 5);

  $("#partnerList").innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="partner-item">
              <strong>${item.name}</strong>
              <span>${item.region}</span>
              <b>${item.note}</b>
            </article>
          `,
        )
        .join("")
    : `<article class="empty-state">현재 연결 가능한 학교 수요가 적습니다. 온라인 모집 또는 신규 개설 요청이 필요합니다.</article>`;
}

function renderSchoolGaps(analysis) {
  const recommendations = schoolGapRecommendations(analysis.school, analysis.field);
  $("#schoolGapList").innerHTML = recommendations.length
    ? recommendations
        .map((item, index) => {
          const route = item.joint ? `${item.joint.mode} 공동강좌` : item.regionHosts ? "인근 학교 연계" : "신규 개설";
          const effect = item.ownDemand + item.peerDemand;
          return `
            <article class="gap-card">
              <strong>${item.course}</strong>
              <span>${groupLabels[item.meta.group]} · ${route}</span>
              <div>
                <b>개설효과 ${effect}명</b>
                <em>${index + 1}순위</em>
              </div>
            </article>
          `;
        })
        .join("")
    : `<article class="empty-state">현재 입력 기준에서는 추가 개설 후보가 충분하지 않습니다.</article>`;
}

function renderPriorityGrid() {
  $("#priorityGrid").innerHTML = openingPriority()
    .map((item, index) => {
      const regions = Array.from(new Set(item.missing.map((school) => school.region))).join("·") || "없음";
      return `
        <article class="priority-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${item.course}</strong>
          <p>${regions} 권역에서 부족 신호가 높습니다.</p>
          <div><b>${item.demand}명 수요</b><em>${item.joint ? item.joint.mode : "신규 개설"}</em></div>
        </article>
      `;
    })
    .join("");
}

function bindEvents() {
  ["matcherSchool", "matcherCourse", "careerField"].forEach((id) => {
    $(`#${id}`).addEventListener("input", renderResult);
    $(`#${id}`).addEventListener("change", renderResult);
  });

  $("#runMatchButton").addEventListener("click", () => {
    const button = $("#runMatchButton");
    const resultPanel = $(".result-panel");
    const reportPanel = $(".ai-report-panel");
    window.clearTimeout(runFeedbackTimer);

    button.disabled = true;
    button.classList.remove("is-complete");
    button.classList.add("is-loading");
    button.innerHTML = buttonContent("sync", "AI 분석 중...");
    resultPanel.classList.remove("is-running");
    reportPanel.classList.remove("is-running");

    window.setTimeout(() => {
      renderResult();
      button.disabled = false;
      button.classList.remove("is-loading");
      button.classList.add("is-running", "is-complete");
      button.innerHTML = buttonContent("task_alt", "추천 완료");
      window.requestAnimationFrame(() => {
        resultPanel.classList.add("is-running");
        reportPanel.classList.add("is-running");
      });

      runFeedbackTimer = window.setTimeout(() => {
        button.classList.remove("is-running", "is-complete");
        button.innerHTML = buttonContent("smart_toy", "AI 추천 실행");
      }, 1400);
    }, 420);
  });
}

function init() {
  renderOptions();
  bindEvents();
  renderResult();
}

init();
