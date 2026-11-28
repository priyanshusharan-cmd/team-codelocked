// Content for the site. Facts come from TEAM_DETAILS.md / DEMO_SITE_REFERENCE.md only.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const img = (p: string) => `${base}/images/${p}`;
export const href = (p: string) => `${base}${p}`;

export const site = {
  email: 'teamcodelocked@gmail.com',
  instagram: 'https://www.instagram.com/teamcodelocked/',
  linkedin: 'https://www.linkedin.com/company/teamcodelocked/',
  bitbybit: 'https://bitbybit-9h8e.vercel.app/',
  whatsapp: null as string | null,      // no real link yet
  registrationsOpen: false,
};

export type CaseStatus = 'Open' | 'Registrations open' | 'Full' | 'Solved' | 'Archived';
export const events = [
  {
    slug: 'the-last-block', no: '01', title: 'The Last Block', dateLabel: '17 Apr', date: '17 April 2026',
    color: 'var(--case-lb)', poster: img('events/the-last-block-poster.webp'), status: 'Solved' as CaseStatus,
    venue: 'PJ Block, 4th floor', team: '3–4', prize: '₹4,000', tagline: 'Every move reveals the truth.',
    rounds: [
      ['Clue Extraction', 'Teams pull Jenga blocks that hide clues.'],
      ['Connect the Dots', 'Put the evidence together and argue it out.'],
      ['Final Reveal', 'Present the solution.'],
    ],
    about: 'A Jenga tower as an evidence locker. Pull the right blocks, piece the clues together, name the answer.',
  },
  {
    slug: 'mind-snap', no: '02', title: 'Mind Snap', dateLabel: '18 Apr', date: '18 April 2026',
    color: 'var(--case-ms)', poster: img('events/mind-snap-poster.webp'), status: 'Solved' as CaseStatus,
    venue: 'PJ Block, 4th floor', team: '3–4', prize: '₹4,500', tagline: 'See it. Snap it. Recall it before it’s gone.',
    rounds: [
      ['Memory Blackout', 'Recall images and patterns after they vanish.'],
      ['Capture the Clue', 'A photo treasure hunt across campus.'],
      ['1-Minute Challenge', 'Quick games, quizzes and tasks against the clock.'],
    ],
    about: 'Memory and reflexes at Utsav 2026. See it, snap it, recall it before it’s gone.',
  },
  {
    slug: 'the-challenge-room', no: '03', title: 'The Challenge Room', dateLabel: '19 Apr', date: '19 April 2026',
    color: 'var(--case-cr)', poster: img('events/the-challenge-room-poster.webp'), status: 'Solved' as CaseStatus,
    venue: 'PJ Block, CR-301', team: '3–4', prize: '₹4,500', tagline: 'Think fast. Adapt faster.',
    rounds: [
      ['Blindfold Memory Mayhem', 'One teammate sees, one remembers, one is blindfolded.'],
      ['Sensory Showdown', 'Identify objects and solve puzzles without sight.'],
      ['QR Chaos', 'QR codes around the room chain into one puzzle.'],
      ['The Pivot Challenge', 'A digital escape room to finish.'],
    ],
    about: 'Four rounds of teamwork in CR-301. Think fast, adapt faster.',
  },
];

export const faculty = { name: 'Dr. Namratha M', role: 'Faculty Coordinator', photo: img('team/namratha-m.webp') };

// 2026–27 heads (from Amitrakshar, 27 Nov 2026). Photos are temporary demo copies.
export const heads = [
  { name: 'Pannag', role: 'Team Head', email: 'pannagk.cs24@bmsce.ac.in', photo: img('team/pannag.webp') },
  { name: 'Aakanshya', role: 'Team Head', email: 'aakanshyaagarwalla.cs24@bmsce.ac.in', photo: img('team/aakanshya-agarwal.webp'), position: '45% 40%' },
  { name: 'Niyati Jain', role: 'Event Management', email: 'neyati.cs24@bmsce.ac.in' },
  { name: 'Dhruv', role: 'Marketing', email: 'dhruvkumar.cs24@bmsce.ac.in' },
  { name: 'Anagha Avinash', role: 'Social Media', email: 'anaghaavinash.cs24@bmsce.ac.in' },
  { name: 'Priya', role: 'Design', email: 'priyaraj.cs24@bmsce.ac.in', photo: img('team/priya-raj-laxmi.webp') },
  { name: 'Amitrakshar', role: 'Tech', email: 'amitrakshar.cs24@bmsce.ac.in', photo: img('team/amitrakshar-mukherjee.webp') },
  { name: 'Dhruv G Nayak', role: 'BitByBit', email: 'dhruvg.cs24@bmsce.ac.in', photo: img('team/dhruv-g-nayak.webp') },
  { name: 'Omkrish', role: 'BitByBit', email: 'omkrrish.cs24@bmsce.ac.in', photo: img('team/omkrrish.webp') },
];

export const crews = ['Tech', 'Design', 'Event Management', 'Marketing', 'Sponsorship & Social Media'];

export const clubCoordinators2526 = ['M S Shailesh', 'Utkrisht Umang'];

type Member = { name: string; team: string; committee: 'Core' | 'Organising' | 'Volunteering'; photo?: string };
const m = (committee: Member['committee'], team: string, names: string[], photos: Record<string, string> = {}) =>
  names.map((name) => ({ name, team, committee, photo: photos[name] }));

// 2025–26 committee, from the demo site (duplicates removed; unnamed "Team Member" cards left out until confirmed).
export const archive2526: Member[] = [
  ...m('Core', 'Tech', ['Amitrakshar Mukherjee', 'Ayush Pandey'], { 'Amitrakshar Mukherjee': img('team/amitrakshar-mukherjee.webp'), 'Ayush Pandey': img('team/ayush-pandey.webp') }),
  ...m('Core', 'Marketing', ['G Shivam', 'Sanvi Venkatesh'], { 'G Shivam': img('team/g-shivam.webp'), 'Sanvi Venkatesh': img('team/sanvi-venkatesh.webp') }),
  ...m('Core', 'Design', ['Hrishikesh Shet'], { 'Hrishikesh Shet': img('team/hrishikesh-shet.webp') }),
  ...m('Organising', 'Tech', ['Abhigyan Shekhar', 'Aditi Anand', 'Dhruv G Nayak', 'Manya Kashyap M', 'Nitin Harsur', 'Srishti Ranjan'], { 'Dhruv G Nayak': img('team/dhruv-g-nayak.webp') }),
  ...m('Organising', 'Social & Sponsorship', ['Aakanshya Agarwal', 'Anitej'], { 'Aakanshya Agarwal': img('team/aakanshya-agarwal.webp') }),
  ...m('Organising', 'Marketing', ['Shaistha Siraj']),
  ...m('Organising', 'Event Management', ['Kirti Kumari', 'Omkrrish', 'Pannag', 'Shreya Ravish'], { Omkrrish: img('team/omkrrish.webp'), Pannag: img('team/pannag.webp') }),
  ...m('Organising', 'Design', ['Priya Raj Laxmi', 'Suhan D Poojary'], { 'Priya Raj Laxmi': img('team/priya-raj-laxmi.webp') }),
  ...m('Volunteering', 'Tech', ['Ayush Kumar', 'Dharshan G Nayak', 'Hambal Labeeb', 'Laasya Deepak', 'Rajath Prakash', 'U Kruthik', 'Vanshika Malhotra', 'Wagisha Kumar']),
  ...m('Volunteering', 'Social & Sponsorship', ['Aarohi Sharma', 'Aleena Faizal', 'Parichit Jain', 'Praneeth K Kulkarni', 'Shama Parveen T', 'Siddhi Agarwal']),
  ...m('Volunteering', 'Marketing', ['Dhruv Kumar Sharma', 'M R Keerthi', 'Pooja Y', 'Tvisha Desai', 'U. Md. Muzammil Shaik']),
  ...m('Volunteering', 'Event Management', ['Aditya Kashyap', 'Anish Saranath', 'Aryan More', 'Ayushi Negi', 'Dev Bansal', 'Hithaishi Reddy', 'Kshama Bhat', 'Piyush Kumar', 'V Sujan', 'Vishesh Agarwal']),
  ...m('Volunteering', 'Design', ['Anuhya', 'Bhavyasri Tulasi', 'Niketh P']),
];
export const teamFilters = ['All', 'Tech', 'Design', 'Event Management', 'Marketing', 'Social & Sponsorship'];
export const headTeam: Record<string, string> = {
  'Team Head': 'All', 'Event Management': 'Event Management', Marketing: 'Marketing', 'Social Media': 'Social & Sponsorship',
  Design: 'Design', Tech: 'Tech', BitByBit: 'Tech',
};
