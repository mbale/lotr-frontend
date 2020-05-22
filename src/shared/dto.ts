/*
** Data Transfer Objects
** Contains the communication schema between Frontend and Backend
*/

/**
 * Possible results for steps
 *
 * @enum {number}
 */
export enum StepsOutcome {
  RingDestroyed = 'RingDestroyed',
  GoodbyeFrodo = 'GoodbyeFrodo',
  Fall = 'Fall',
  Nothing = 'Nothing',
  // when steps are in invalid state e.g badly formed request from frontend
  BlackSpeech = 'BlackSpeech'
}

/**
 * Required interface for the StepsAPI response
 *
 * @export
 * @interface StepsAPIResponse
 */
export interface StepsAPIResponse {
  outcome: StepsOutcome
}

/**
 * Required interface for steps API endpoint
 *
 * @export
 * @interface StepsAPIRequestParamss
 */
export interface StepsAPIRequestParams {
  steps: string
}
