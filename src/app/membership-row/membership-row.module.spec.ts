import { MembershipRowModule } from './membership-row.module';

describe('MembershipRowModule', () => {
  let membershipRowModule: MembershipRowModule;

  beforeEach(() => {
    membershipRowModule = new MembershipRowModule();
  });

  it('should create an instance', () => {
    expect(membershipRowModule).toBeTruthy();
  });
});
