import { PendingRequestsModule } from './pending-requests.module';

describe('PendingRequestsModule', () => {
  let pendingRequestsModule: PendingRequestsModule;

  beforeEach(() => {
    pendingRequestsModule = new PendingRequestsModule();
  });

  it('should create an instance', () => {
    expect(pendingRequestsModule).toBeTruthy();
  });
});
