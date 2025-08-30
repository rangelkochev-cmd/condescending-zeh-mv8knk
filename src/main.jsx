// src/main.jsx
// src/main.jsx
// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // <-- точен път и разширение

createRoot(document.getElementById("root")).render(<App />);

// Прост, самодостатъчен UI с Tailwind. Няма външни зависимости освен framer-motion.
// Демонстрационен прототип (mockup), без бекенд.
// Навигация: Начало, Тестове, Флашкарти, Ментор, Прогрес.

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    {subtitle && <p className="text-sm opacity-70 mt-1">{subtitle}</p>}
  </div>
);

const Card = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="rounded-2xl shadow-md border border-gray-100 p-4 bg-white hover:shadow-lg transition cursor-pointer"
  >
    {children}
  </div>
);

const Pill = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full bg-gray-100">{children}</span>
);

const BottomNav = ({ tab, setTab }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
    <div className="max-w-md mx-auto grid grid-cols-5 text-sm">
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
          className={`py-3 ${
            tab === key ? "font-semibold" : "opacity-60"
          } hover:opacity-100`}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

const Home = ({ setTab, setActiveFlow }) => (
  <div className="space-y-4 pb-24">
    <SectionTitle
      title="Добре дошъл в „Учѝ с AI“"
      subtitle="Качи материал, създай тест/флашкарти или попитай Ментор"
    />

    <div className="grid grid-cols-1 gap-3">
      <Card onClick={() => setActiveFlow("summaries")}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Резюме от лекция/учебник</h3>
            <p className="text-sm opacity-70">
              Качи PDF/текст → конспект + ключови понятия
            </p>
          </div>
          <Pill>5 мин</Pill>
        </div>
      </Card>

      <Card onClick={() => setTab("quiz")}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Създай тест</h3>
            <p className="text-sm opacity-70">
              MCQ, кратки отговори, мини-изпит
            </p>
          </div>
          <Pill>бързо</Pill>
        </div>
      </Card>

      <Card onClick={() => setTab("flash")}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Флашкарти (повторения)</h3>
            <p className="text-sm opacity-70">
              Научи важните термини с интервални повторения
            </p>
          </div>
          <Pill>фокус</Pill>
        </div>
      </Card>

      <Card onClick={() => setTab("mentor")}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Ментор (чат)</h3>
            <p className="text-sm opacity-70">
              Задай въпрос → получи насоки стъпка по стъпка
            </p>
          </div>
          <Pill>24/7</Pill>
        </div>
      </Card>

      <Card onClick={() => setActiveFlow("studyplan")}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Учебен план до изпита</h3>
            <p className="text-sm opacity-70">
              Въведи дата и теми → план по дни
            </p>
          </div>
          <Pill>персонално</Pill>
        </div>
      </Card>
    </div>
  </div>
);

const SummariesFlow = ({ onBack }) => (
  <div className="space-y-4 pb-24">
    <button onClick={onBack} className="text-sm opacity-70">
      ← Назад
    </button>
    <SectionTitle
      title="Резюме от лекция/учебник"
      subtitle="Качи текст или постави линк"
    />

    <div className="rounded-2xl border p-4 bg-white space-y-3">
      <textarea
        className="w-full border rounded-xl p-3"
        rows={6}
        placeholder="Постави текста или основните точки тук..."
      ></textarea>
      <div className="grid grid-cols-2 gap-3">
        <select className="border rounded-xl p-3">
          <option>Ниво: училище</option>
          <option>Ниво: университет</option>
        </select>
        <select className="border rounded-xl p-3">
          <option>Стил: кратък конспект</option>
          <option>Стил: списък с понятия</option>
          <option>Стил: ключови въпроси</option>
        </select>
      </div>
      <button className="w-full rounded-xl p-3 bg-black text-white">
        Генерирай резюме
      </button>
    </div>

    <div className="rounded-2xl border p-4 bg-white">
      <p className="text-sm opacity-70 mb-2">Примерен резултат</p>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>
          Тема: Фотосинтеза – процес, при който растенията превръщат светлина в
          химична енергия.
        </li>
        <li>Ключови етапи: светлинни реакции, тъмен етап (цикъл на Калвин).</li>
        <li>Ключови понятия: хлорофил, строма, грани, АТФ, НАДФН.</li>
      </ul>
    </div>
  </div>
);

const Quiz = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="space-y-4 pb-24">
      <SectionTitle title="Създай тест" subtitle="Избери тема и тип въпроси" />
      {step === 0 && (
        <div className="rounded-2xl border p-4 bg-white space-y-3">
          <input
            className="w-full border rounded-xl p-3"
            placeholder="Тема (напр. 'Интеграли')"
          />

          <div className="grid grid-cols-2 gap-3">
            <select className="border rounded-xl p-3">
              <option>MCQ</option>
              <option>Кратки отговори</option>
            </select>
            <select className="border rounded-xl p-3">
              <option>Ниво: лесно</option>
              <option>Средно</option>
              <option>Трудно</option>
            </select>
          </div>
          <button
            onClick={() => setStep(1)}
            className="w-full rounded-xl p-3 bg-black text-white"
          >
            Генерирай
          </button>
        </div>
      )}
      {step === 1 && (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl border p-4 bg-white">
              <p className="font-medium mb-2">
                Въпрос {i}: Примерен въпрос за темата
              </p>
              <div className="space-y-2 text-sm">
                {["A", "B", "C", "D"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input type="radio" name={`q${i}`} />
                    <span>Вариант {opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button className="w-full rounded-xl p-3 bg-black text-white">
            Предай тест
          </button>
        </div>
      )}
    </div>
  );
};

const Flashcards = () => {
  const [index, setIndex] = useState(0);
  const data = [
    {
      q: "Дефиниция: АТОМ",
      a: "Най-малката частица на химичен елемент, запазваща неговите свойства.",
    },
    {
      q: "Термин: МИТОЗА",
      a: "Тип клетъчно делене, при което се образуват две идентични клетки.",
    },
    { q: "Формула: Производна на x^2", a: "2x" },
  ];
  const flip = () => setIndex((i) => (i + 1) % data.length);
  return (
    <div className="space-y-4 pb-24">
      <SectionTitle
        title="Флашкарти"
        subtitle="Интервални повторения (примерен набор)"
      />
      <motion.div
        key={index}
        initial={{ rotateY: 180, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border p-8 bg-white text-center shadow"
      >
        <p className="text-lg font-medium">{data[index].q}</p>
        <p className="mt-2 text-sm opacity-70">(натисни „Покажи отговор“)</p>
        <button
          onClick={flip}
          className="mt-4 rounded-xl px-4 py-2 bg-black text-white"
        >
          Покажи отговор
        </button>
      </motion.div>
      <div className="rounded-2xl border p-4 bg-white">
        <p className="text-sm opacity-70">Примерен отговор:</p>
        <p className="text-sm">{data[index].a}</p>
      </div>
    </div>
  );
};

const Mentor = () => (
  <div className="space-y-4 pb-24">
    <SectionTitle
      title="Ментор (чат)"
      subtitle="Попитай, получи насоки и подсказки"
    />
    <div className="rounded-2xl border p-4 bg-white space-y-3">
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-xl p-3"
          placeholder="Пр.: Обясни фотосинтезата с прости думи"
        />
        <button className="rounded-xl px-4 py-2 bg-black text-white">
          Прати
        </button>
      </div>
      <div className="bg-gray-50 rounded-xl p-3 text-sm">
        <p className="opacity-70">Примерен отговор:</p>
        <p>
          Нека започнем с кратко обяснение и после ще ти задам въпрос, за да
          проверим дали е ясно...
        </p>
      </div>
    </div>
    <div className="rounded-2xl border p-4 bg-white text-sm">
      <p className="font-medium mb-1">Съвет за учене</p>
      <p className="opacity-80">
        Учи с кратки сесии (25 мин) + 5 мин почивка. Започни с трудните теми,
        когато си най-свеж.
      </p>
    </div>
  </div>
);

const Progress = () => (
  <div className="space-y-4 pb-24">
    <SectionTitle title="Прогрес" subtitle="Примерни метрики за седмицата" />
    <div className="grid grid-cols-2 gap-3">
      {[
        "Резюмета",
        "Тестове",
        "Флашкарти",
        "Серия дни",
        "Среден резултат",
        "Слаби теми",
      ].map((m) => (
        <div key={m} className="rounded-2xl border p-4 bg-white">
          <p className="text-xs opacity-70">{m}</p>
          <p className="text-xl font-semibold mt-1">
            {Math.floor(Math.random() * 20) + 1}
          </p>
        </div>
      ))}
    </div>
    <div className="rounded-2xl border p-4 bg-white">
      <p className="text-sm opacity-70 mb-1">Препоръка</p>
      <p className="text-sm">
        Фокусирай се върху „Клетка и делене“ – резултатите ти там са най-ниски.
      </p>
    </div>
  </div>
);

const StudyPlan = ({ onBack }) => (
  <div className="space-y-4 pb-24">
    <button onClick={onBack} className="text-sm opacity-70">
      ← Назад
    </button>
    <SectionTitle
      title="Учебен план"
      subtitle="Въведи дата и теми → план по дни"
    />
    <div className="rounded-2xl border p-4 bg-white space-y-3">
      <input
        className="w-full border rounded-xl p-3"
        placeholder="Дата на изпит (напр. 20.12.2025)"
      />
      <textarea
        className="w-full border rounded-xl p-3"
        rows={4}
        placeholder="Списък с теми, разделени със запетая"
      />
      <button className="w-full rounded-xl p-3 bg-black text-white">
        Генерирай план
      </button>
    </div>
    <div className="rounded-2xl border p-4 bg-white text-sm">
      <p className="opacity-70 mb-2">Примерен план (седмица 1)</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Понеделник: Тема 1 – четене + флашкарти (30 мин)</li>
        <li>Вторник: Тема 2 – видео/лекция + тест (30 мин)</li>
        <li>Сряда: Преговор – флашкарти (15 мин) + мини-тест (10 мин)</li>
      </ul>
    </div>
  </div>
);

export default function StudyAIApp() {
  const [tab, setTab] = useState("home");
  const [activeFlow, setActiveFlow] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-md mx-auto p-4 pb-28">
        <AnimatePresence mode="wait">
          {activeFlow === "summaries" && (
            <motion.div
              key="summaries"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <SummariesFlow onBack={() => setActiveFlow(null)} />
            </motion.div>
          )}
          {activeFlow === "studyplan" && (
            <motion.div
              key="plan"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <StudyPlan onBack={() => setActiveFlow(null)} />
            </motion.div>
          )}
          {!activeFlow && (
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-4"
            >
              {tab === "home" && (
                <Home setTab={setTab} setActiveFlow={setActiveFlow} />
              )}
              {tab === "quiz" && <Quiz />}
              {tab === "flash" && <Flashcards />}
              {tab === "mentor" && <Mentor />}
              {tab === "progress" && <Progress />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <BottomNav tab={tab} setTab={setTab} />
    </div>
  );
}
