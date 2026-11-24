export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-[0_0_70px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-10">
        <div className="mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />

        <h2 className="mb-6 text-4xl font-bold text-white">About Me</h2>

        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I&apos;m a Senior Full Stack Engineer with 7+ years of experience
            designing scalable distributed systems, microservices, and
            cloud-native applications across product and enterprise platforms.
          </p>

          <p>
            My core expertise spans Node.js, NestJS, TypeScript, GraphQL
            Federation, PostgreSQL, Redis, Docker, and AWS. I enjoy solving
            complex engineering problems involving system design, performance
            optimization, event-driven architectures, and reliable API platforms.
          </p>

          <div className="grid gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5 text-slate-300 md:grid-cols-3">
            {[
              "AWS Serverless & Automation",
              "Ticketing, SaaS, IoT & Home Automation",
              "AI, RAG & Integrations",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-center text-sm font-medium text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <p>
            I have developed AWS-based automation platforms and enterprise
            solutions using Lambda, SQS/SNS, DynamoDB, EventBridge, and
            infrastructure as code. Currently, I work on a Slack approval
            platform for EA (Metplore), building TypeScript/Node.js workflows
            provisioned with AWS CDK. Previously, I contributed to federated
            GraphQL ticketing systems, IoT/SaaS platforms, and RAG-based AI
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}