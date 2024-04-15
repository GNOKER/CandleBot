import {
  BaseConfigService,
} from '@application/config-service'

export class ConfigService extends BaseConfigService {
  constructor() {
    super()
    console.info('ConfigService created')
  }
}
