"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import blogwebsite from "../../public/blog-website.png";
import linkora from "../../public/linkora.png";
import todolist from "../../public/TodoList.png";
import weatherApp from "../../public/weatherApp.png";
import loanform from "../../public/loanform.png";
import linkorajs from "../../public/Linkora-js.png";
import alathantimes from "../../public/AlathanTimes.png";
import todoListinjs from "../../public/todoList-js.png";
const projects = [
  {
    title: "Blog website",
    description:
      "A personal blog website with user registration and commenting features",
    image: blogwebsite,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "Framer Motion",
      "Prisma",
      "Zod",
    ],
    href: "https://blogs-website-chi.vercel.app/",
  },
  {
    title: "Linkora",
    description: "A social networking site developed by React",
    image: linkora,
    tags: ["React.js", "MUI"],
    href: "https://clinquant-snickerdoodle-4468fb.netlify.app/",
  },
  {
    title: "Todo List",
    description:
      "A web application for your own to-do list to organize your work",
    image: todolist,
    tags: ["React.js", "MUI"],
    href: "https://velvety-salamander-8b6769.netlify.app/",
  },
  {
    title: "Weather App",
    description: "A site that displays the weather for a specific city",
    image: weatherApp,
    tags: ["React.js", "MUI"],
    href: "https://graceful-phoenix-6d803e.netlify.app/",
  },
  {
    title: "Loan Form",
    description: "Loan Form developed by react",
    image: loanform,
    tags: ["React.js"],
    href: "https://loanformwebapp.netlify.app/",
  },
  {
    title: "Linkora By Js",
    description: "A social networking site developed by java Script",
    image: linkorajs,
    tags: ["Java Script", "HTML", "CSS", "Bootstrap"],
    href: "https://effulgent-bubblegum-0f5e2d.netlify.app/",
  },
  {
    title: "Prayer Times",
    description:
      "A website that displays prayer times for several different cities",
    image: alathantimes,
    tags: ["Java Script", "HTML", "CSS"],
    href: "https://quiet-blini-e0020f.netlify.app/",
  },
  {
    title: "Todo List",
    description:
      "A web application for your own to-do list to organize your work",
    image: todoListinjs,
    tags: ["Java Script", "HTML", "CSS"],
    href: "https://stellar-speculoos-db6e7f.netlify.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
            >
              <motion.a href={project.href} target="_blank">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
