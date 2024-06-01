import { KeycloakConfiguration } from './config';

export class Keycloak {

  constructtor(config: KeycloakConfiguration) {}

  private checkIsBrowser() {
    return typeof window !== 'undefined';
  }
}
