export const emailSignUp = {
	name: "emailSignUp",
	title: "Newsletter Signup",
	type: "document",
	fields: [
		{
			name: "email",
			type: "string",
			title: "Contact Email",
			validation: (Rule) => Rule.email(),
		},
	],
};
