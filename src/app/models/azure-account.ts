import {AccountType} from './AccountType';
import {Account} from './account';

export class AzureAccount extends Account {
  accountId: string;
  accountName: string;
  subscriptionId: string;
  tenantId: string;
  type: AccountType;
  region: string;
}
