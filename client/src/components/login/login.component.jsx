import React, { useContext, useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { GlobalContext } from "../../context/globalState";
import "./login.styles.scss";

const Login = ({ history }) => {
  const { setIsAuthenticated } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <form>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={(ev) => setEmail(ev.target.value)}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(ev) => setPassword(ev.target.value)}
          label="Password"
          required
        />
        <div className="button">
          <Button
            onClick={() => {
              setIsAuthenticated(true);
              history.push("/");
            }}
            color="primary"
            variant="outlined"
            type="submit"
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
