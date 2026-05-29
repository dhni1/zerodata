const schools = [
  {
    id: "apgujeong",
    name: "압구정고",
    region: "서울",
    district: "강남구",
    type: "대도시",
    courses: { 2024: 62, 2025: 68 },
    career: 24,
    specialty: 6,
    complement: 0.76,
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
    career: 20,
    specialty: 4,
    complement: 0.68,
    groups: { science: 10, ai: 5, humanities: 19, arts: 8, language: 6 },
    schoolCourses: ["심리학", "생명과학 실험", "사회문제 탐구", "일본어 회화", "미술 전공 실기"],
    demand: { "인공지능 기초": 7, "데이터 과학": 6, "고급 화학": 4, "국제경제": 9 },
  },
  {
    id: "suwon",
    name: "수원고",
    region: "경기",
    district: "수원시",
    type: "수도권 중핵",
    courses: { 2024: 51, 2025: 56 },
    career: 18,
    specialty: 5,
    complement: 0.71,
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
    career: 12,
    specialty: 2,
    complement: 0.48,
    groups: { science: 7, ai: 2, humanities: 13, arts: 5, language: 2 },
    schoolCourses: ["사회문제 탐구", "생명과학 실험", "일본어 회화", "음악 감상과 비평"],
    demand: { "인공지능 기초": 9, "데이터 과학": 5, "고급 물리학": 6, "프로그래밍": 8 },
  },
  {
    id: "jeonju",
    name: "전주고",
    region: "전북",
    district: "전주시",
    type: "중소도시",
    courses: { 2024: 49, 2025: 52 },
    career: 17,
    specialty: 4,
    complement: 0.63,
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
    career: 9,
    specialty: 1,
    complement: 0.42,
    groups: { science: 6, ai: 1, humanities: 10, arts: 4, language: 2 },
    schoolCourses: ["사회문제 탐구", "생활과 과학", "음악 감상과 비평"],
    demand: { "인공지능 기초": 6, "데이터 과학": 4, "고급 화학": 5, "심리학": 7 },
  },
  {
    id: "chuncheon",
    name: "춘천고",
    region: "강원",
    district: "춘천시",
    type: "중소도시",
    courses: { 2024: 45, 2025: 49 },
    career: 15,
    specialty: 3,
    complement: 0.59,
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
    career: 8,
    specialty: 1,
    complement: 0.38,
    groups: { science: 5, ai: 1, humanities: 10, arts: 4, language: 1 },
    schoolCourses: ["생활과 과학", "사회문제 탐구", "스포츠 생활"],
    demand: { "인공지능 기초": 5, "데이터 과학": 5, "고급 물리학": 4, "심리학": 6 },
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

const groupLabels = {
  science: "과학",
  ai: "정보·AI",
  humanities: "인문사회",
  arts: "예체능",
  language: "제2외국어",
};

const groupColors = {
  science: "#3d6f9c",
  ai: "#117c7a",
  humanities: "#df6c4f",
  arts: "#c99a21",
  language: "#5f8f61",
};

const state = {
  region: "전체",
  query: "",
  group: "전체",
  riskOnly: false,
  aiOnly: false,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const fmt = new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 1 });

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function predictedCourses(school) {
  const growth = school.courses[2025] - school.courses[2024];
  return Math.max(school.courses[2025], school.courses[2025] + growth);
}

function accessScore(school) {
  return Math.round(
    school.courses[2025] * 0.58 +
      school.career * 0.72 +
      school.specialty * 1.1 +
      school.groups.ai * 1.25 +
      school.complement * 28,
  );
}

function riskLevel(school) {
  const score = accessScore(school);
  if (score >= 78) return { label: "양호", className: "risk-low" };
  if (score >= 58) return { label: "관찰", className: "risk-mid" };
  return { label: "보완", className: "risk-high" };
}

function filteredSchools() {
  return schools.filter((school) => {
    const regionMatch = state.region === "전체" || school.region === state.region;
    const query = state.query.trim().toLowerCase();
    const queryMatch =
      !query ||
      school.name.toLowerCase().includes(query) ||
      school.region.toLowerCase().includes(query) ||
      school.district.toLowerCase().includes(query);
    const groupMatch = state.group === "전체" || school.groups[state.group] > 0;
    const riskMatch = !state.riskOnly || riskLevel(school).label !== "양호";
    const aiMatch = !state.aiOnly || school.groups.ai <= 4;
    return regionMatch && queryMatch && groupMatch && riskMatch && aiMatch;
  });
}

function regionSummary(source = schools) {
  const regions = ["서울", "경기", "전북", "강원"];
  return regions.map((region) => {
    const items = source.filter((school) => school.region === region);
    const groups = Object.fromEntries(
      Object.keys(groupLabels).map((key) => [key, items.reduce((sum, school) => sum + school.groups[key], 0)]),
    );
    return {
      region,
      count: items.length,
      avg2024: average(items.map((school) => school.courses[2024])),
      avg2025: average(items.map((school) => school.courses[2025])),
      avg2026: average(items.map(predictedCourses)),
      complement: average(items.map((school) => school.complement)),
      access: average(items.map(accessScore)),
      groups,
    };
  });
}

function renderKpis() {
  const items = filteredSchools();
  const byRegion = regionSummary(items.length ? items : schools);
  const maxAvg = Math.max(...byRegion.map((row) => row.avg2025));
  const minAvg = Math.min(...byRegion.map((row) => row.avg2025));
  const lowAi = items.filter((school) => school.groups.ai <= 4).length;
  const cards = [
    {
      label: "평균 선택과목",
      value: fmt.format(average(items.map((school) => school.courses[2025]))),
      note: "2025 편성표 기준",
      trend: `2026 ${fmt.format(average(items.map(predictedCourses)))}개 예상`,
    },
    {
      label: "지역 평균 격차",
      value: fmt.format(maxAvg - minAvg),
      note: "최고 지역 평균 - 최저 지역 평균",
      trend: "표본 지역 비교",
    },
    {
      label: "공동교육 보완율",
      value: `${Math.round(average(items.map((school) => school.complement)) * 100)}%`,
      note: "부족 과목의 외부 수강 가능성",
      trend: "온라인 포함",
    },
    {
      label: "정보·AI 취약 학교",
      value: `${lowAi}`,
      note: "정보·AI 개설 과목 4개 이하",
      trend: "우선 지원 후보",
    },
  ];

  $("#kpiGrid").innerHTML = cards
    .map(
      (card) => `
        <article class="kpi-card">
          <span class="kpi-label">${card.label}</span>
          <strong class="kpi-value">${card.value}</strong>
          <span class="kpi-note">${card.note}</span>
          <span class="kpi-trend">${card.trend}</span>
        </article>
      `,
    )
    .join("");
}

function renderInsights() {
  const data = regionSummary();
  const top = data.reduce((best, row) => (row.avg2025 > best.avg2025 ? row : best), data[0]);
  const bottom = data.reduce((weak, row) => (row.avg2025 < weak.avg2025 ? row : weak), data[0]);
  const weakAi = schools.filter((school) => school.groups.ai <= 4);
  const lowComplement = schools.filter((school) => school.complement < 0.5);
  const gap = Math.round(top.avg2025 - bottom.avg2025);
  const insights = [
    {
      value: `${gap}개`,
      title: `${top.region}과 ${bottom.region}의 평균 격차`,
      copy: "같은 고교학점제 안에서도 지역별 과목 선택 폭이 다르게 나타납니다.",
    },
    {
      value: `${weakAi.length}교`,
      title: "정보·AI 과목 보완 필요",
      copy: "AI·데이터 계열 희망 학생에게 공동교육과정 연결이 필요합니다.",
    },
    {
      value: `${lowComplement.length}교`,
      title: "공동교육 보완율 50% 미만",
      copy: "학교 밖 대안까지 포함해도 접근성이 낮은 우선 지원 후보입니다.",
    },
  ];

  $("#insightList").innerHTML = insights
    .map(
      (item) => `
        <article class="insight-item">
          <span class="insight-value">${item.value}</span>
          <span class="insight-copy">
            <strong>${item.title}</strong>
            <span>${item.copy}</span>
          </span>
        </article>
      `,
    )
    .join("");
}

function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(320, Math.floor(rect.width * ratio));
  canvas.height = Math.floor((Number(canvas.getAttribute("height")) || 260) * ratio);
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  return { ctx, width: rect.width, height: Number(canvas.getAttribute("height")) || 260 };
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, height / 2, width / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawRegionChart() {
  const canvas = $("#regionChart");
  const { ctx, width, height } = setupCanvas(canvas);
  const data = regionSummary();
  const padding = { top: 20, right: 24, bottom: 42, left: 44 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const max = Math.max(...data.map((row) => row.avg2026)) + 8;
  const barGroup = chartW / data.length;
  const barW = Math.min(24, barGroup / 5);

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#dfe7e8";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#6b7c85";
  ctx.font = "12px system-ui";

  for (let i = 0; i <= 4; i += 1) {
    const y = padding.top + chartH - (chartH * i) / 4;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
    ctx.fillText(String(Math.round((max * i) / 4)), 8, y + 4);
  }

  const colors = ["#9bbbc0", "#117c7a", "#df6c4f"];
  data.forEach((row, index) => {
    const values = [row.avg2024, row.avg2025, row.avg2026];
    const xBase = padding.left + index * barGroup + barGroup / 2 - barW * 1.7;
    values.forEach((value, valueIndex) => {
      const h = (value / max) * chartH;
      const x = xBase + valueIndex * barW * 1.28;
      const y = padding.top + chartH - h;
      ctx.fillStyle = colors[valueIndex];
      drawRoundedRect(ctx, x, y, barW, h, 5);
      ctx.fill();
    });
    ctx.fillStyle = "#2c414b";
    ctx.textAlign = "center";
    ctx.fillText(row.region, padding.left + index * barGroup + barGroup / 2, height - 14);
  });

  const legend = [
    ["2024", colors[0]],
    ["2025", colors[1]],
    ["2026 예상", colors[2]],
  ];
  ctx.textAlign = "left";
  legend.forEach(([label, color], index) => {
    const x = width - padding.right - 190 + index * 66;
    ctx.fillStyle = color;
    drawRoundedRect(ctx, x, 6, 10, 10, 3);
    ctx.fill();
    ctx.fillStyle = "#52656e";
    ctx.fillText(label, x + 15, 15);
  });
}

function drawGroupChart() {
  const canvas = $("#groupChart");
  const { ctx, width, height } = setupCanvas(canvas);
  const data = regionSummary();
  const keys = Object.keys(groupLabels);
  const padding = { top: 20, right: 16, bottom: 36, left: 48 };
  const rowH = (height - padding.top - padding.bottom) / data.length;

  ctx.clearRect(0, 0, width, height);
  ctx.font = "12px system-ui";
  ctx.textAlign = "left";

  data.forEach((row, rowIndex) => {
    const total = keys.reduce((sum, key) => sum + row.groups[key], 0);
    const y = padding.top + rowIndex * rowH + 10;
    ctx.fillStyle = "#2c414b";
    ctx.fillText(row.region, 8, y + 16);
    let x = padding.left;
    keys.forEach((key) => {
      const segment = ((row.groups[key] / total) * (width - padding.left - padding.right)) || 0;
      ctx.fillStyle = groupColors[key];
      drawRoundedRect(ctx, x, y, segment, 22, 5);
      ctx.fill();
      x += segment;
    });
  });

  let legendX = 8;
  keys.forEach((key) => {
    ctx.fillStyle = groupColors[key];
    drawRoundedRect(ctx, legendX, height - 18, 10, 10, 3);
    ctx.fill();
    ctx.fillStyle = "#52656e";
    ctx.fillText(groupLabels[key], legendX + 14, height - 9);
    legendX += ctx.measureText(groupLabels[key]).width + 34;
  });
}

function drawForecastChart() {
  const canvas = $("#forecastChart");
  const { ctx, width, height } = setupCanvas(canvas);
  const data = regionSummary();
  const padding = { top: 20, right: 22, bottom: 38, left: 38 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const max = Math.max(...data.flatMap((row) => [row.avg2024, row.avg2025, row.avg2026])) + 8;
  const years = [2024, 2025, 2026];
  const regionColors = ["#117c7a", "#df6c4f", "#3d6f9c", "#c99a21"];

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#dfe7e8";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#6b7c85";
  ctx.font = "12px system-ui";

  for (let i = 0; i <= 4; i += 1) {
    const y = padding.top + chartH - (chartH * i) / 4;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
  }

  years.forEach((year, index) => {
    const x = padding.left + (chartW * index) / 2;
    ctx.fillStyle = "#52656e";
    ctx.textAlign = "center";
    ctx.fillText(String(year), x, height - 12);
  });

  data.forEach((row, rowIndex) => {
    const values = [row.avg2024, row.avg2025, row.avg2026];
    const points = values.map((value, index) => ({
      x: padding.left + (chartW * index) / 2,
      y: padding.top + chartH - (value / max) * chartH,
    }));

    ctx.strokeStyle = regionColors[rowIndex];
    ctx.lineWidth = 2.5;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.stroke();
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(points[1].x, points[1].y);
    ctx.lineTo(points[2].x, points[2].y);
    ctx.stroke();
    ctx.setLineDash([]);

    points.forEach((point) => {
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = regionColors[rowIndex];
      ctx.stroke();
    });

    ctx.fillStyle = regionColors[rowIndex];
    ctx.textAlign = "left";
    ctx.fillText(row.region, points[2].x + 8, points[2].y + 4);
  });
}

function renderSchoolTable() {
  const rows = filteredSchools();
  $("#tableCount").textContent = `${rows.length}개교`;
  $("#schoolRows").innerHTML = rows
    .map((school) => {
      const risk = riskLevel(school);
      return `
        <tr>
          <td>
            <span class="school-name">
              <strong>${school.name}</strong>
              <span>${school.type}</span>
            </span>
          </td>
          <td>${school.region} ${school.district}</td>
          <td>${school.courses[2025]}개</td>
          <td>${school.career + school.specialty}개</td>
          <td>${school.groups.ai}개</td>
          <td>${Math.round(school.complement * 100)}%</td>
          <td><span class="status-badge ${risk.className}">${risk.label}</span></td>
          <td>
            <button class="table-action" type="button" title="매칭 열기" aria-label="${school.name} 매칭 열기" data-open-match="${school.id}">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
          </td>
        </tr>
      `;
    })
    .join("");

  $$("[data-open-match]").forEach((button) => {
    button.addEventListener("click", () => {
      $("#matcherSchool").value = button.dataset.openMatch;
      setView("matcher");
      renderMatch();
    });
  });
}

function renderFilters() {
  $$(".segment-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.region === state.region);
  });
}

function renderCharts() {
  drawRegionChart();
  drawGroupChart();
  drawForecastChart();
}

function renderDashboard() {
  renderFilters();
  renderKpis();
  renderInsights();
  renderCharts();
  renderSchoolTable();
}

function renderMatcherOptions() {
  $("#matcherSchool").innerHTML = schools.map((school) => `<option value="${school.id}">${school.name} · ${school.region} ${school.district}</option>`).join("");
  const courses = Array.from(new Set([...jointCourses.map((item) => item.course), ...schools.flatMap((school) => school.schoolCourses)])).sort((a, b) =>
    a.localeCompare(b, "ko"),
  );
  $("#matcherCourse").innerHTML = courses.map((course) => `<option value="${course}">${course}</option>`).join("");
  $("#matcherSchool").value = schools[0].id;
  $("#matcherCourse").value = "인공지능 기초";
}

function matchingCandidates(course, currentSchool) {
  return schools
    .filter((school) => school.id !== currentSchool.id && !school.schoolCourses.includes(course))
    .map((school) => ({ school, demand: school.demand[course] || 0 }))
    .filter((item) => item.demand > 0)
    .sort((a, b) => b.demand - a.demand);
}

function renderMatch() {
  const school = schools.find((item) => item.id === $("#matcherSchool").value) || schools[0];
  const course = $("#matcherCourse").value;
  const studentCount = Number($("#studentCount").value);
  $("#studentCountLabel").textContent = `${studentCount}명`;

  const inSchool = school.schoolCourses.includes(course);
  const joint = jointCourses.find((item) => item.course === course);
  const candidates = matchingCandidates(course, school);
  const combinedDemand = studentCount + candidates.slice(0, 3).reduce((sum, item) => sum + item.demand, 0);
  const sameRegion = joint?.region === school.region;
  const onlineBonus = joint?.mode === "온라인" ? 12 : joint?.mode === "혼합" ? 8 : 3;
  const score = inSchool ? 96 : Math.min(94, Math.round(42 + combinedDemand * 2.2 + (sameRegion ? 14 : 0) + onlineBonus));

  $("#matchScore").textContent = `${score}점`;
  $("#matchTitle").textContent = `${school.name} · ${course}`;

  let statusTitle = "";
  let statusCopy = "";
  let statusClass = "risk-mid";
  if (inSchool) {
    statusTitle = "교내 개설 가능";
    statusCopy = `${school.name} 교육과정 안에서 바로 수강 가능한 과목입니다.`;
    statusClass = "risk-low";
  } else if (joint && combinedDemand >= 12) {
    statusTitle = "공동수강 개설권";
    statusCopy = `${joint.provider}와 ${candidates.length ? "인근 학교 수요" : "온라인 수요"}를 묶으면 개설 기준에 근접합니다.`;
    statusClass = "risk-low";
  } else if (joint) {
    statusTitle = "외부 대안 있음";
    statusCopy = `${joint.provider}에 대안이 있으나 현재 수요가 낮아 추가 모집이 필요합니다.`;
  } else {
    statusTitle = "개설 우선 검토";
    statusCopy = "학교·교육청용 우선순위 후보로 등록해 수요 누적을 확인해야 합니다.";
    statusClass = "risk-high";
  }

  $("#matchStatus").innerHTML = `
    <span class="status-badge ${statusClass}">${statusTitle}</span>
    <strong>${statusCopy}</strong>
    <span>예상 결합 수요 ${combinedDemand}명 · ${joint ? `${joint.mode} · 정원 ${joint.capacity}명` : "공동교육과정 미등록"}</span>
  `;

  const topCandidates = candidates.slice(0, 3);
  const routeCards = [
    {
      title: inSchool ? "교내 수강" : "공동교육과정",
      body: inSchool ? `${school.name} 자체 개설 과목` : joint ? `${joint.provider} · ${joint.region}` : "교육청 신규 개설 후보",
      meta: inSchool ? "학교 내 접근" : joint ? `${joint.mode} 수업` : "수요 기반 검토",
    },
    {
      title: "수요 조합",
      body: topCandidates.length
        ? [`${school.name} ${studentCount}명`, ...topCandidates.map((item) => `${item.school.name} ${item.demand}명`)].join(" + ")
        : `${school.name} ${studentCount}명`,
      meta: `${combinedDemand}명 확보`,
    },
    {
      title: "2026 반영",
      body: `${school.region} ${school.type}의 ${groupLabels[joint?.group] || "희망 과목"} 접근성 지표에 반영`,
      meta: `${predictedCourses(school)}개 과목 예상`,
    },
  ];

  $("#routeGrid").innerHTML = routeCards
    .map(
      (card) => `
        <article class="route-card">
          <strong>${card.title}</strong>
          <span>${card.body}</span>
          <div class="metric-line"><span>판정</span><b>${card.meta}</b></div>
        </article>
      `,
    )
    .join("");
}

function renderPriorityGrid() {
  const priorities = Object.keys(groupLabels)
    .map((key) => {
      const weakSchools = schools.filter((school) => school.groups[key] <= (key === "ai" ? 4 : 7));
      return {
        key,
        label: groupLabels[key],
        count: weakSchools.length,
        regions: Array.from(new Set(weakSchools.map((school) => school.region))).join("·") || "없음",
        demand: weakSchools.reduce((sum, school) => sum + Object.values(school.demand).reduce((a, b) => a + b, 0), 0),
      };
    })
    .sort((a, b) => b.count - a.count || b.demand - a.demand);

  $("#priorityGrid").innerHTML = priorities
    .map(
      (item) => `
        <article class="priority-card">
          <span class="priority-tag" style="background:${groupColors[item.key]}22;color:${groupColors[item.key]}">${item.label}</span>
          <strong>${item.count}개교 우선 보완</strong>
          <span>${item.regions} 권역에서 부족 신호가 높습니다.</span>
          <div class="metric-line"><span>희망 수요</span><b>${item.demand}명</b></div>
        </article>
      `,
    )
    .join("");
}

function setView(view) {
  $$("[data-view-panel]").forEach((panel) => {
    const active = panel.dataset.viewPanel === view;
    panel.classList.toggle("is-visible", active);
    panel.hidden = !active;
  });

  $$(".tab-button").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (view === "overview") renderDashboard();
  if (view === "matcher") renderMatch();
}

function bindEvents() {
  $$(".segment-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.region = button.dataset.region;
      renderDashboard();
    });
  });

  $$(".tab-button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  $("#schoolSearch").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderDashboard();
  });

  $("#courseGroupFilter").addEventListener("change", (event) => {
    state.group = event.target.value;
    renderDashboard();
  });

  $("#riskOnly").addEventListener("change", (event) => {
    state.riskOnly = event.target.checked;
    renderDashboard();
  });

  $("#aiOnly").addEventListener("change", (event) => {
    state.aiOnly = event.target.checked;
    renderDashboard();
  });

  $("#matcherSchool").addEventListener("change", renderMatch);
  $("#matcherCourse").addEventListener("change", renderMatch);
  $("#studentCount").addEventListener("input", renderMatch);
  $("#recalculateButton").addEventListener("click", () => {
    renderDashboard();
    renderMatch();
  });

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(renderCharts);
  });
}

function init() {
  renderMatcherOptions();
  renderPriorityGrid();
  bindEvents();
  renderDashboard();
  renderMatch();
}

init();
