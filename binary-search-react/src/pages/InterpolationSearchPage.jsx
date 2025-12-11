import React, { useState } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import InterpolationSearchAnimation from "../components/InterpolationSearchAnimation";
import InterpolationSearchSimulator2 from "../components/InterpolationSearchSimulator2";

export default function InterpolationSearchPage() {
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
              Given a sorted array with uniformly distributed values, use Interpolation Search to find target index or return -1.
            </p>
          </div>
        </div>
      )}

      {activeTab === "Approach" && (
        <div className="tab-content active">
          <div className="section">
            <h2 className="section-title">💡 Algorithm Approach</h2>
            <p style={{ marginBottom: 20 }}>
              Interpolation Search estimates the probable position of the target using a formula derived from linear interpolation between the low and high values. Works best on uniformly distributed arrays.
            </p>

            <h3 className="section-subtitle">Core Concept:</h3>
            <ol className="algo-steps">
              <li>Start with low = 0 and high = n - 1</li>
              <li>Calculate pos = low + ((target - arr[low]) * (high - low) / (arr[high] - arr[low]))</li>
              <li>Check arr[pos]; adjust low/high accordingly and repeat.</li>
              <li>Return index if found, otherwise return -1.</li>
            </ol>
          </div>

          <InterpolationSearchAnimation />

          <div className="section">
            <div className="note-box">
              <div className="note-title">⚠️ Important Note</div>
              <p>Interpolation Search works best with uniformly distributed data. For skewed distributions, it may perform worse than binary search.</p>
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
              <InterpolationSearchSimulator2 />
            </div>
          )}

          {langTab === "C++" && (
          <div className="section">
            <h3 className="section-subtitle">C++ Implementation:</h3>
            <div className="code-block"><div className="code-header"><span className="code-language">C++</span></div>
              <pre>{`int interpolationSearch(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low == high) {
            if (arr[low] == target) return low;
            return -1;
        }
        int pos = low + ((double)(high - low) / (arr[high] - arr[low])) * (target - arr[low]);
        if (arr[pos] == target) return pos;
        if (arr[pos] < target) low = pos + 1;
        else high = pos - 1;
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
              <pre>{`def interpolation_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high and target >= arr[low] and target <= arr[high]:
        if low == high:
            return low if arr[low] == target else -1
        pos = low + int(((high - low) / (arr[high] - arr[low])) * (target - arr[low]))
        if arr[pos] == target:
            return pos
        if arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1
    return -1`}</pre>
            </div>
            </div>
          )}

          {langTab === "JavaScript" && (
            <div className="section">
              <h3 className="section-subtitle">JavaScript Implementation:</h3>
            <div className="code-block"><div className="code-header"><span className="code-language">JavaScript</span></div>
              <pre>{`function interpolationSearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) return arr[low] === target ? low : -1;
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));
        if (arr[pos] === target) return pos;
        if (arr[pos] < target) low = pos + 1;
        else high = pos - 1;
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
            <p>Average time: O(log log n) for uniform distribution, worst-case O(n). Space: O(1).</p>
          </div>
        </div>
      )}

    </div>
  );
}
