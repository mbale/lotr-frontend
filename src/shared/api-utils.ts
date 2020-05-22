import { NextApiRequest, NextApiResponse } from 'next';
import checkStepsInputFormat from 'shared/validation';

/**
 * Validate incoming requests for API
 *
 * @param {NextApiRequest} request
 * @param {NextApiResponse} _response
 * @returns
 */
export default async function ParamsValidation(
  request: NextApiRequest,
  _response: NextApiResponse,
) {
  const { steps } = request.query;

  // make sure that steps are there
  // and exclude arrays
  if (steps && !Array.isArray(steps)) {
    // test the format
    const isValid = checkStepsInputFormat(steps);

    if (isValid) {
      return steps;
    }
  }
  // fallback
  throw new Error('Invalid format');
}
