// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { BaseEdgeModuleSpecification } from './baseEdgeModuleSpecification';

export interface EdgeModuleSpecification extends BaseEdgeModuleSpecification {
    status: string;
    startupOrder?: number;
    restartPolicy: string;
    version?: string;
}
