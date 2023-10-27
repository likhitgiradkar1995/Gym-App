import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipementExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Similar{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          target Muscle
        </span>{" "}
        Exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mb={5}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Similar{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          equipment
        </span>{" "}
        Exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipementExercises.length ? (
          <HorizontalScrollbar data={equipementExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
