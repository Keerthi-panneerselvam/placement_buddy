import React, { useState } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import JumpSearchAnimation from "../components/JumpSearchAnimation";
import JumpSearchSimulator2 from "../components/JumpSearchSimulator2";

export default function JumpSearchPage() {
  const tabs = ["Problem", "Approach", "Implementation", "Complexity"];
  const [activeTab, setActiveTab] = useState("Problem");
  const [langTab, setLangTab] = useState("Java");

  return (
    <div className="container">
      <Header />
      <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

      {activeTab === "Problem" && (
        <div className="tab-content active">
          <div className="section">
            <h2 className="section-title">📋 Problem Statement</h2>
            <p>
              Given a sorted array and a target, find the index of target if present using Jump Search. If not present, return -1.
            </p>
            <div className="example-box" style={{ marginTop: 12 }}>
              <div className="example-title">Example:</div>
              <div className="example-content">Input: arr = [0,1,2,3,4,5,6,7,8,9], target = 7 → Output: 7</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Approach" && (
        <div className="tab-content active">
          <div className="section">
            <h2 className="section-title">💡 Algorithm Approach</h2>
            <p style={{ marginBottom: 20 }}>
              Jump Search works on sorted arrays. We jump ahead by fixed steps (usually sqrt(n)) to find a block where target may reside, then perform a linear search inside that block.
            </p>

            <h3 className="section-subtitle">Core Concept:</h3>
            <ol className="algo-steps">
              <li>Choose step = floor(sqrt(n)).</li>
              <li>Jump from index 0 to step, 2*step, ... until an element >= target or end.</li>
              <li>When a block is found, do linear search within the previous block.</li>
              <li>Return the index if found, otherwise return -1.</li>
            </ol>
          </div>

          <JumpSearchAnimation />

          <div className="section">
            <div className="note-box">
              <div className="note-title">⚠️ Important Note</div>
              <p>Jump Search only works on sorted arrays. The optimal jump size is √n which balances between linear and binary search.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Implementation" && (
        <div className="tab-content active">
          <div className="tabs" style={{ marginBottom: 12 }}>
            <button className={"tab " + (langTab === "Java" ? "active" : "")} onClick={() => setLangTab("Java")}>Java</button>
            <button className={"tab " + (langTab === "C++" ? "active" : "")} onClick={() => setLangTab("C++")}>C++</button>
            <button className={"tab " + (langTab === "Python" ? "active" : "")} onClick={() => setLangTab("Python")}>Python</button>
            <button className={"tab " + (langTab === "JavaScript" ? "active" : "")} onClick={() => setLangTab("JavaScript")}>JavaScript</button>
          </div>

          {langTab === "Java" && (
            <div>
              <JumpSearchSimulator2 />
            </div>
          )}

          {langTab === "C++" && (
          <div className="section">
            <h3 className="section-subtitle">C++ Implementation:</h3>
            <div className="code-block"><div className="code-header"><span className="code-language">C++</span></div>
              <pre>{`int jumpSearch(vector<int>& arr, int target) {
    int n = arr.size();
    int step = floor(sqrt(n));
    int prev = 0;

    while (prev < n && arr[min(step, n)-1] < target) {
        prev = step;
        step += floor(sqrt(n));
        if (prev >= n) return -1;
    }

    for (int i = prev; i < min(step, n); ++i) {
        if (arr[i] == target) return i;
    }
    return -1;
}`}</pre>
            </div>
          </div>
          )}

          {langTab === "Python" && (
            <div className="section">
              <h3 className="section-subtitle">Python Implementation:</h3>
            <div className="code-block"><div className="code-header"><span className="code-language">Python</span></div>
              <pre>{`import math

def jump_search(arr, target):
    n = len(arr)
    step = int(math.sqrt(n))
    prev = 0

    while prev < n and arr[min(step, n)-1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1

    for i in range(prev, min(step, n)):
        if arr[i] == target:
            return i
    return -1`}</pre>
            </div>
            </div>
          )}

          {langTab === "JavaScript" && (
            <div className="section">
              <h3 className="section-subtitle">JavaScript Implementation:</h3>
            <div className="code-block"><div className="code-header"><span className="code-language">JavaScript</span></div>
              <pre>{`function jumpSearch(arr, target) {
    const n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (prev < n && arr[Math.min(step, n)-1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;
    }

    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}`}</pre>
            </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "Complexity" && (
        <div className="tab-content active">
          <div className="section">
            <h2 className="section-title">⏱️ Complexity</h2>
            <p>Time: O(√n) for jumps + linear inside block; Space: O(1).</p>
          </div>
        </div>
      )}

    </div>
  );
}
