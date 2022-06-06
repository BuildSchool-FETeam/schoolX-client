import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { styles } from "./styles";
import "./styles.css";

export const SwitchButton = () => {
  const [state, setState] = useState(false);

  function _onClick() {
    setState(!state);
  }

  return (
    <Box sx={styles.outer} onClick={_onClick}>
      <Box sx={styles.inner} className={state ? "slideInAnimation" : ""}></Box>
    </Box>
  );
};
