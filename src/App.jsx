// src/App.jsx
import React, { useState } from "react";

/**
 * Пълен UI mockup на "Учѝ с AI"
 * - Чист React, без външни зависимости
 * - Всичко е със inline стили
 */

const S = {
  page: { minHeight: "100vh", margin: 0, background: "#f6f7f9", color: "#111" },
  wrap: { maxWidth: 420, margin: "0 auto", padding: 16, paddingBottom: 96 },
  h2: { fontSize: 18, fontWeight: 700, margin: "8px 0" },
  p: { fontSize: 14, opacity: 0.8, margin: "4px 0 12px" },
  card: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    cursor: "pointer",
  },
  cardStatic: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  pill: {
    fontSize: 12,
    background: "#f2f2f2",
    borderRadius: 999,
    padding: "4px 8px",
    marginLeft: 8,
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    border: "1px solid #ddd",
    marginBottom: 8,
    fontSize: 14,
  },
  textarea: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    border: "1px solid #ddd",
    marginBottom: 8,
    fontSize: 14,
    minHeight: 120,
  },
  btn: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "none",
    background: "#111",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  btnSmall: {
    padding: "10px 16px",
    borderRadius: 10,
    border: "none",
    background: "#111",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  bottomBar: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    background: "#fff",
    borderTop: "1px solid #e5e5e5",
  },
  bottomInner: {
    maxWidth: 420,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
  },
  navBtn: (active) => ({
    padding: "12px 0",
    fontSize: 13,
    fontWeight: active ? 700 : 400,
    opacity: active ? 1 : 0.6,
    background: "transparent",
    border: "none",
    cursor: "pointer",
  }),
  small: { fontSize: 12, opacity: 0.7 },
};

const SectionTitle = ({ title, subtitle }) => (
  <div style={{ marginBottom: 8 }}>
    <div style={S.h2}>{title}</div>
    {subtitle && <p style={S.p}>{subtitle}</p>}
  </div>
);

const Card = ({ children, onClick }) => (
  <div onClick={onClick} style={onClick ? S.card : S.cardStatic}>
    {children}
  </div>
);

const Pill = ({ children }) => <span style={S.pill}>{children}</span>;

const BottomNav = ({ tab, setTab }) => (
  <div style={S.bottomBar}>
    <div style={S.bottomInner}>
      {[
        ["Начало", "home"],
        ["Тестове", "quiz"],
        ["Флашкарти", "flash"],
        ["Ментор", "mentor"],
        ["Прогрес", "progress"],
      ].map(([label, key]) => (
        <button
          key={key}
          onClick={() => setTab(key)}
          style={S.navBtn(tab === key)}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

/* -------- Екрани -------- */

const Home = ({ setTab, setFlow }) => (
  <div style={{ paddingBottom: 80 }}>
    <SectionTitle
      title="Добре дошъл в Учѝ с AI"
      subtitle="Качи материал, създай тест/флашкарти или попитай Ментор"
    />

    <Card onClick={() => setFlow("summaries")}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 600 }}>Резюме от лекция/учебник</div>
          <div style={S.small}>Качи текст → конспект и ключови понятия</div>
        </div>
        <Pill>5 мин</Pill>
      </div>
    </Card>

    <Card onClick={() => setTab("quiz")}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 600 }}>Създай тест</div>
          <div style={S.small}>MCQ, кратки отговори, мини-изпит</div>
        </div>
        <Pill>бързо</Pill>
      </div>
    </Card>

    <Card onClick={() => setTab("flash")}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 600 }}>Флашкарти (повторения)</div>
          <div style={S.small}>Интервални повторения</div>
        </div>
        <Pill>фокус</Pill>
      </div>
    </Card>

    <Card onClick={() => setTab("mentor")}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 600 }}>Ментор (чат)</div>
          <div style={S.small}>Подсказки и насоки стъпка по стъпка</div>
        </div>
        <Pill>24/7</Pill>
      </div>
    </Card>

    <Card onClick={() => setFlow("studyplan")}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 600 }}>Учебен план до изпита</div>
          <div style={S.small}>Дата + теми → план по дни</div>
        </div>
        <Pill>персонално</Pill>
      </div>
    </Card>
  </div>
);

const SummariesFlow = ({ onBack }) => (
  <div style={{ paddingBottom: 80 }}>
    <button
      onClick={onBack}
      style={{
        ...S.small,
        background: "none",
        border: "none",
        cursor: "pointer",
        marginBottom: 8,
      }}
    >
      ← Назад
    </button>
    <SectionTitle
      title="Резюме от лекция/учебник"
      subtitle="Постави текст (пример)"
    />

    <Card>
      <textarea
        style={S.textarea}
        placeholder="Постави текста или основните точки тук..."
      ></textarea>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <select style={S.input}>
          <option>Ниво: училище</option>
          <option>Ниво: университет</option>
        </select>
        <select style={S.input}>
          <option>Стил: кратък конспект</option>
          <option>Стил: списък с понятия</option>
          <option>Стил: ключови въпроси</option>
        </select>
      </div>
      <button style={S.btn}>Генерирай резюме</button>
    </Card>

    <Card>
      <div style={S.small}>Примерен резултат</div>
      <ul style={{ paddingLeft: 16, margin: 0 }}>
        <li>Тема: Фотосинтеза – превръщане на светлина в химична енергия.</li>
        <li>Етапи: светлинни реакции и тъмен етап (цикъл на Калвин).</li>
        <li>Понятия: хлорофил, строма, грани, АТФ, НАДФН.</li>
      </ul>
    </Card>
  </div>
);

const Quiz = () => {
  const [step, setStep] = useState(0);
  return (
    <div style={{ paddingBottom: 80 }}>
      <SectionTitle title="Създай тест" subtitle="Избери тема и тип въпроси" />
      {step === 0 && (
        <Card>
          <input style={S.input} placeholder="Тема (напр. 'Интеграли')" />
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
          >
            <select style={S.input}>
              <option>MCQ</option>
              <option>Кратки отговори</option>
            </select>
            <select style={S.input}>
              <option>Ниво: лесно</option>
              <option>Средно</option>
              <option>Трудно</option>
            </select>
          </div>
          <button onClick={() => setStep(1)} style={S.btn}>
            Генерирай
          </button>
        </Card>
      )}
      {step === 1 && (
        <div>
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <p style={{ margin: "0 0 8px", fontWeight: 600 }}>
                Въпрос {i}: Примерен въпрос за темата
              </p>
              {["A", "B", "C", "D"].map((opt) => (
                <label
                  key={opt}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 14,
                  }}
                >
                  <input type="radio" name={`q${i}`} /> Вариант {opt}
                </label>
              ))}
            </Card>
          ))}
          <button style={S.btn}>Предай тест</button>
        </div>
      )}
    </div>
  );
};

const Flashcards = () => {
  const [index, setIndex] = useState(0);
  const data = [
    {
      q: "Дефиниция: атом",
      a: "Най-малката частица на химичен елемент, запазваща свойствата му.",
    },
    {
      q: "Термин: митоза",
      a: "Тип клетъчно делене, при което се образуват две идентични клетки.",
    },
    { q: "Формула: производна на x^2", a: "2x" },
  ];
  const flip = () => setIndex((i) => (i + 1) % data.length);

  return (
    <div style={{ paddingBottom: 80 }}>
      <SectionTitle
        title="Флашкарти"
        subtitle="Интервални повторения (примерен набор)"
      />
      <Card>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{data[index].q}</div>
          <div style={S.small}>(натисни 'Покажи отговор')</div>
          <button onClick={flip} style={{ ...S.btnSmall, marginTop: 8 }}>
            Покажи отговор
          </button>
        </div>
      </Card>
      <Card>
        <div style={S.small}>Примерен отговор:</div>
        <div style={{ fontSize: 14 }}>{data[index].a}</div>
      </Card>
    </div>
  );
};

const Mentor = () => (
  <div style={{ paddingBottom: 80 }}>
    <SectionTitle
      title="Ментор (чат)"
      subtitle="Попитай, получи насоки и подсказки"
    />
    <Card>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          style={{ ...S.input, flex: 1 }}
          placeholder="Пр.: Обясни фотосинтезата с прости думи"
        />
        <button style={S.btnSmall}>Прати</button>
      </div>
      <div
        style={{
          background: "#f7f7f8",
          borderRadius: 10,
          padding: 10,
          fontSize: 14,
          marginTop: 8,
        }}
      >
        <div style={S.small}>Примерен отговор:</div>
        <div>
          Нека започнем с кратко обяснение и после ще ти задам въпрос, за да
          проверим дали е ясно...
        </div>
      </div>
    </Card>
    <Card>
      <div style={{ fontWeight: 600, marginBottom: 4 }}>Съвет за учене</div>
      <div>
        Учи с кратки сесии (25 мин) + 5 мин почивка. Започни с трудните теми,
        когато си най-свеж.
      </div>
    </Card>
  </div>
);

const Progress = () => (
  <div style={{ paddingBottom: 80 }}>
    <SectionTitle title="Прогрес" subtitle="Примерни метрики за седмицата" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      {[
        "Резюмета",
        "Тестове",
        "Флашкарти",
        "Серия дни",
        "Среден резултат",
        "Слаби теми",
      ].map((m) => (
        <Card key={m}>
          <div style={S.small}>{m}</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>
            {Math.floor(Math.random() * 20) + 1}
          </div>
        </Card>
      ))}
    </div>
    <Card>
      <div style={S.small}>Препоръка</div>
      <div style={{ fontSize: 14 }}>
        Фокусирай се върху Клетка и делене – там резултатите са най-ниски.
      </div>
    </Card>
  </div>
);

const StudyPlan = ({ onBack }) => (
  <div style={{ paddingBottom: 80 }}>
    <button
      onClick={onBack}
      style={{
        ...S.small,
        background: "none",
        border: "none",
        cursor: "pointer",
        marginBottom: 8,
      }}
    >
      ← Назад
    </button>
    <SectionTitle
      title="Учебен план"
      subtitle="Въведи дата и теми → план по дни"
    />
    <Card>
      <input style={S.input} placeholder="Дата на изпит (напр. 20.12.2025)" />
      <textarea
        style={S.textarea}
        placeholder="Списък с теми, разделени със запетая"
      />
      <button style={S.btn}>Генерирай план</button>
    </Card>
    <Card>
      <div style={S.small}>Примерен план (седмица 1)</div>
      <ul style={{ paddingLeft: 16, margin: 0 }}>
        <li>Понеделник: Тема 1 – четене + флашкарти (30 мин)</li>
        <li>Вторник: Тема 2 – лекция/видео + тест (30 мин)</li>
        <li>Сряда: Преговор – флашкарти (15 мин) + мини-тест (10 мин)</li>
      </ul>
    </Card>
  </div>
);

/* -------- App -------- */

export default function App() {
  const [tab, setTab] = useState("home");
  const [flow, setFlow] = useState(null); // <-- главно F

  return (
    <div style={S.page}>
      <div style={S.wrap}>
        {flow === "summaries" && <SummariesFlow onBack={() => setFlow(null)} />}

        {flow === "studyplan" && <StudyPlan onBack={() => setFlow(null)} />}

        {!flow && (
          <div>
            {tab === "home" && <Home setTab={setTab} setFlow={setFlow} />}
            {tab === "quiz" && <Quiz />}
            {tab === "flash" && <Flashcards />}
            {tab === "mentor" && <Mentor />}
            {tab === "progress" && <Progress />}
          </div>
        )}
      </div>

      <BottomNav tab={tab} setTab={setTab} />
    </div>
  );
}
