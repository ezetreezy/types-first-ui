/*
   Copyright Avero, LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import { flow as fpFlow } from 'lodash/fp';
import { StateTransform } from '../types';

export function flow<T extends object>(set1: StateTransform<T>): (state: T) => T;
export function flow<T extends object>(
  set1: StateTransform<T>,
  set2: StateTransform<T>
): (state: T) => T;
export function flow<T extends object>(
  set1: StateTransform<T>,
  set2: StateTransform<T>,
  set3: StateTransform<T>
): (state: T) => T;
export function flow<T extends object>(
  set1: StateTransform<T>,
  set2: StateTransform<T>,
  set3: StateTransform<T>,
  set4: StateTransform<T>
): (state: T) => T;
export function flow<T extends object>(
  set1: StateTransform<T>,
  set2: StateTransform<T>,
  set3: StateTransform<T>,
  set4: StateTransform<T>,
  set5: StateTransform<T>
): (state: T) => T;
export function flow<T extends object>(
  set1: StateTransform<T>,
  set2: StateTransform<T>,
  set3: StateTransform<T>,
  set4: StateTransform<T>,
  set5: StateTransform<T>,
  set6: StateTransform<T>
): (state: T) => T;
export function flow<T extends object>(
  set1: StateTransform<T>,
  set2: StateTransform<T>,
  set3: StateTransform<T>,
  set4: StateTransform<T>,
  set5: StateTransform<T>,
  set6: StateTransform<T>,
  set7: StateTransform<T>
): (state: T) => T;
export function flow<T extends object>(
  set1: StateTransform<T>,
  set2: StateTransform<T>,
  set3: StateTransform<T>,
  set4: StateTransform<T>,
  set5: StateTransform<T>,
  set6: StateTransform<T>,
  set7: StateTransform<T>,
  set8: StateTransform<T>
): (state: T) => T;
export function flow<T extends object>(
  set1: StateTransform<T>,
  set2: StateTransform<T>,
  set3: StateTransform<T>,
  set4: StateTransform<T>,
  set5: StateTransform<T>,
  set6: StateTransform<T>,
  set7: StateTransform<T>,
  set8: StateTransform<T>,
  set9: StateTransform<T>
): (state: T) => T;
export function flow<T extends object>(
  set1: StateTransform<T>,
  set2: StateTransform<T>,
  set3: StateTransform<T>,
  set4: StateTransform<T>,
  set5: StateTransform<T>,
  set6: StateTransform<T>,
  set7: StateTransform<T>,
  set8: StateTransform<T>,
  set9: StateTransform<T>,
  set10: StateTransform<T>
): (state: T) => T;

export function flow<T extends object>(...args: any[]): (state: T) => T {
  // @ts-ignore lodash flow typings :(
  return fpFlow(...args);
}
