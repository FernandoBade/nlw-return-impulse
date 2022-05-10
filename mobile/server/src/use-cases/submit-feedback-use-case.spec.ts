import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    { sendMail: sendMailSpy}
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'This is a bug',
            screenshot: 'data:image/png;base64,123456789',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();

    });

    it('should NOT be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'This is a bug',
            screenshot: 'data:image/png;base64,123456789',
        })).rejects.toThrow();
    });

    it('should NOT be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'OTHER',
            comment: '',
            screenshot: 'data:image/png;base64,123456789',
        })).rejects.toThrow();
    });

    it('should NOT be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'OTHER',
            comment: 'This is a bug',
            screenshot: '123456789.jpg',
        })).rejects.toThrow();
    });
})