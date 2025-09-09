"use client";

import { useState } from "react";

export default function ExamplePage() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  return (
    <div
      className="min-h-screen py-8"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Component Testing
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            ทดสอบ component พื้นฐานจาก globals.css
          </p>
        </div>

        {/* Base Elements */}
        <section
          className="rounded-lg shadow-sm p-6 mb-6"
          style={{ backgroundColor: "var(--bg-white)" }}
        >
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Base Elements
          </h2>

          {/* Links */}
          <div className="mb-4">
            <p>
              This is a <a href="#">regular link</a> in a paragraph.
            </p>
          </div>

          {/* Form Elements */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="test-input"
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Input Field
              </label>
              <input
                id="test-input"
                type="text"
                placeholder="Enter some text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="test-select"
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Select Dropdown
              </label>
              <select
                id="test-select"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className="w-full"
              >
                <option value="">Choose an option...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </section>

        {/* Button Components */}
        <section
          className="rounded-lg shadow-sm p-6 mb-6"
          style={{ backgroundColor: "var(--bg-white)" }}
        >
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Button Components
          </h2>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-primary" disabled>
              Disabled Button
            </button>
          </div>
        </section>

        {/* Form State Display */}
        <section
          className="rounded-lg shadow-sm p-6"
          style={{ backgroundColor: "var(--bg-white)" }}
        >
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Form State
          </h2>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Input:</strong> {inputValue || "Empty"}
            </p>
            <p>
              <strong>Select:</strong> {selectValue || "None selected"}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
