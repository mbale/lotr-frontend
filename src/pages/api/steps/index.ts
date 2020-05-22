import { NextApiRequest, NextApiResponse } from 'next';
import { StepsAPIResponse, StepsOutcome } from 'shared/dto';
import ParamsValidation from 'shared/api-utils';
import {
  StepType, middleEarthMap, MapObject, getObjectPosition,
} from 'shared/core';

export default async (
  request: NextApiRequest,
  response: NextApiResponse<StepsAPIResponse>,
) => {
  try {
    const steps = await ParamsValidation(request, response);
    const stepsModel = steps.split(',');

    // start position
    const position = getObjectPosition(
      MapObject.Frodo,
      middleEarthMap,
    );

    // do the steps
    stepsModel.forEach((step) => {
      switch (step) {
        case StepType.North:
          position.rowIndex -= 1;
          break;
        case StepType.South:
          position.rowIndex += 1;
          break;
        case StepType.East:
          position.colIndex += 1;
          break;
        case StepType.West:
          position.colIndex -= 1;
          break;
        default:
          break;
      }
    });

    // check for out of bonds = falls
    const outOfBondRow = position.rowIndex > middleEarthMap.length;

    // TODO: refactor both out of bounds check so we handle it in the same time
    if (outOfBondRow) {
      return response
        .status(200)
        .json({
          outcome: StepsOutcome.Fall,
        });
    }

    const outOfBondCol = middleEarthMap[position.rowIndex].length < position.colIndex;

    if (outOfBondCol) {
      return response
        .status(200)
        .json({
          outcome: StepsOutcome.Fall,
        });
    }

    // we're on the map
    const endPosition = middleEarthMap[
      position.rowIndex
    ][
      position.colIndex
    ];

    let outcome: StepsOutcome = null;

    // let's check what we've found at the end position
    switch (endPosition) {
      case MapObject.Doom:
        outcome = StepsOutcome.RingDestroyed;
        break;
      case MapObject.Orc:
        outcome = StepsOutcome.GoodbyeFrodo;
        break;
      default:
        // just in case
        outcome = StepsOutcome.Nothing;
        break;
    }

    return response
      .status(200)
      .json({
        outcome,
      });
  } catch (error) {
    // input error
    return response
      .status(400)
      .json({
        outcome: StepsOutcome.BlackSpeech,
      });
  }
};
