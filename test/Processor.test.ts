import { User } from '../src/User'
import { Processor } from '../src/Processor'

describe('ProcessorTest', () => {
  let user1: User
  let user2: User

  beforeEach(() => {
    user1 = new User('John', 'Smith', '89898765679', 'Beverly Hills 5', 17)
    user2 = new User('David', 'Lost', '89498765656', 'Beverly Hills 9', 18)
  })
  test('Default State Undefined', () => {
    expect(user1.consentGiven).toBeUndefined()
  })
  test('State Is True', () => {
    Processor.giveConsent(user1)
    expect(user1.consentGiven).toBe(true)
  })
  test('Processor Verify Consent', () => {
    Processor.giveConsent(user1)
    expect(Processor.verifyConsent(user1)).toBeTruthy()
  })
  test('Processor Verify Consent', () => {
    expect(Processor.verifyConsent(user1)).toBeFalsy()
  })
  test('User is under 18', () => {
    expect(Processor.checkConsentEligibility(user1)).toBeFalsy()
  })
  test('User is adult', () => {
    expect(Processor.checkConsentEligibility(user2)).toBeTruthy()
  })
  test('Consent Revoked', () => {
    Processor.revokeConsent(user1)
    expect(user1.consentGiven).toBe(false)
  })
})
