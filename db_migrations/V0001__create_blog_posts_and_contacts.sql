CREATE TABLE t_p87716929_project_quantum_leap.blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100) DEFAULT 'Финансы',
  read_time INTEGER DEFAULT 5,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO t_p87716929_project_quantum_leap.blog_posts (title, slug, excerpt, content, category, read_time) VALUES
(
  'Как начать вести бюджет: 5 простых шагов',
  'kak-nachat-vesti-byudzhet',
  'Многие считают ведение бюджета сложным занятием. На самом деле — это 30 минут в месяц, которые изменят ваше отношение к деньгам.',
  'Ведение бюджета — это основа финансового здоровья. Начните с простых шагов: запишите все источники дохода, отследите расходы за месяц, разделите их на категории, установите лимиты и откладывайте минимум 10% от дохода.',
  'Бюджет',
  4
),
(
  'Правило 50/30/20: простая формула распределения денег',
  'pravilo-50-30-20',
  'Эта формула помогает миллионам людей грамотно распределять зарплату. Разберём, как применить её в российских реалиях.',
  '50% на необходимые расходы (жильё, еда, транспорт), 30% на желания (развлечения, кафе, одежда), 20% на накопления и инвестиции. Простая и эффективная система.',
  'Советы',
  3
),
(
  'Финансовая подушка: зачем нужна и как накопить',
  'finansovaya-podushka',
  'Финансовая подушка — это деньги на 3–6 месяцев жизни без дохода. Рассказываем, как накопить её даже с небольшой зарплатой.',
  'Финансовая подушка защищает от неожиданных ситуаций: потери работы, болезни или срочного ремонта. Начните откладывать хотя бы 5% от дохода ежемесячно — и через год у вас будет надёжный резерв.',
  'Накопления',
  5
);

CREATE TABLE t_p87716929_project_quantum_leap.contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
