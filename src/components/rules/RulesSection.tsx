const RULES = [
  { icon: '🧠', title: "UNDERSTAND, DON'T MEMORIZE", color: 'var(--neon)',
    text: "After seeing a solution, close it. Wait 5 mins. Now code it from scratch. If you can't, you don't know it. Memorized solutions fail in interviews. Understood patterns don't." },
  { icon: '🗣️', title: 'TALK WHILE YOU TYPE', color: 'var(--neon2)',
    text: 'FAANG interviewers want to hear your brain work. Practice narrating: "I\'m thinking HashMap here because we need O(1) lookup..." Do this even alone. It becomes automatic.' },
  { icon: '⏱️', title: 'THE 15-MINUTE RULE', color: 'var(--medium)',
    text: "Stuck for 15 minutes? Look at the approach hint only — not the code. Still stuck after 15 more? Watch the solution. But code it yourself after. Never copy-paste." },
  { icon: '📊', title: 'ALWAYS STATE BIG-O', color: 'var(--hard)',
    text: "Every single solution you write, say the time AND space complexity out loud. If you can't explain it, you can't defend it in an interview. This is non-negotiable at senior level." },
  { icon: '🔁', title: 'REVISIT AFTER 3 DAYS', color: 'var(--neon)',
    text: "Spaced repetition is the secret. After solving a problem, flag it. Come back in 3 days and solve it again cold. If you can — you own it. If not — re-learn it properly." },
  { icon: '🎯', title: '2 PROBLEMS MINIMUM DAILY', color: 'var(--neon2)',
    text: "You're busy. Fine. 2 problems a day is still 150 in 75 days. The streak matters more than the count. Miss one day? Never miss two. Consistency beats intensity every time." },
];

export default function RulesSection() {
  return (
    <section id="rules">
      <div className="section-label">04 — The Code</div>
      <h2 className="section-title">RULES OF<br />ENGAGEMENT</h2>
      <p className="section-desc">
        Being a senior engineer means you can learn this fast. Here's the protocol that separates people who crack FAANG from people who just LeetCode.
      </p>
      <div className="motivation-grid">
        {RULES.map((rule, i) => (
          <div key={i} className="mcard" data-num={String(i + 1).padStart(2, '0')}>
            <div className="mcard-icon">{rule.icon}</div>
            <div className="mcard-title" style={{ color: rule.color }}>{rule.title}</div>
            <div className="mcard-text">{rule.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
