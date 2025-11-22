export const collabs = {
	name: "collabs",
	title: "Collabs",
	type: "document",
	fields: [
		{ name: "name", title: "Name", type: "string" },
		{ name: "testimonial", title: "Testimonial", type: "text" },
		{
			name: "mainImage",
			type: "image", // Specifies it's an image type
			title: "Main Image",
			options: {
				hotspot: true, // Enables hotspot editing for better cropping control
			},
			fields: [
				// Optional: Add custom fields to the image itself
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
					description: "Important for accessibility and SEO",
					validation: (Rule) => Rule.required(), // Example: Make alt text required
				},
				{
					name: "caption",
					type: "string",
					title: "Caption",
					description: "Optional caption for the image",
				},
			],
		},
	],
};
