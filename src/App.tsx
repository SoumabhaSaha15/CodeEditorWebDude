import React from "react";
import { CSS, HTML, JS } from "./templates";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Navbar, NavbarBrand, Button } from "flowbite-react";
import { FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";

export default function App() {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');
  return (
    <React.Fragment>
      <Navbar fluid rounded className="bg-white shadow-sm sticky top-0 z-50">
        <NavbarBrand href="https://portfolio-seven-mu-85.vercel.app">
          <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt=" Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Code-Editor</span>
          <a className="underline text-3xl px-2" href="https://github.com/soumabhasaha15"><FaGithub color="gray" /></a>
          <a className="underline text-3xl px-2" href="https://www.linkedin.com/in/soumabha-saha-663816253"><FaLinkedin color="#0080ff" /></a>
        </NavbarBrand>
        <Button
          onClick={() => setTheme(prev => {
            document.documentElement.className = (prev === 'dark') ? '' : 'dark';
            return prev == 'dark' ? 'light' : 'dark';
          })}
          className="w-10 h-10 p-2"
          children={theme == 'dark' ? <FaMoon /> : <FaSun />}
        />
      </Navbar>
      <div className="min-h-[calc(100dvh-64px)] dark:bg-gray-800">
        <Sandpack
          theme={theme}
          template="static"
          files={{
            "index.html": HTML,
            "style.css": CSS,
            "script.js": JS
          }}
          options={{
            editorHeight: "calc(100dvh - 64px)",
            showTabs: true,
            showLineNumbers: true,
            showInlineErrors: true,
            wrapContent: true,
            showNavigator: true,
            showConsole: true
          }} />
      </div>
    </React.Fragment >
  );
}
