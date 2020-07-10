import React from "react";
import { Link } from "react-router-dom";

export const SelectFormCategory = ({ setFormCategory }) => {
  return (
    <div>
      Select form Category:
      <ul>
        <li>
          <Link onClick={() => setFormCategory("incomeforms")}>
            Income Forms
          </Link>
        </li>
        <li>
          <Link onClick={() => setFormCategory("insuranceforms")}>
            Insurance Forms
          </Link>
        </li>
        <li>
          <Link onClick={() => setFormCategory("healthforms")}>
            Health Forms{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};
