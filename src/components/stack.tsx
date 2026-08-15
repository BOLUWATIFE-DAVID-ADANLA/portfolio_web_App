import React from 'react';

const stack = [
  "Flutter", "Dart", "TypeScript", "React", "React Native", "Next.js",
  "Jetpack Compose", "Java", "Node.js", "Spring Boot", "PostgreSQL",
  "MongoDB", "Redis", "Kafka", "RabbitMQ", "Firebase", "Supabase",
  "Docker", "AWS",
];

const Stack = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-sm text-foreground">Stack</h2>
      <p className="text-sm text-muted leading-relaxed">
        {stack.join(" · ")}
      </p>
    </section>
  );
};

export default Stack;
