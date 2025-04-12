export default {
	async fetch(request, env, ctx) {
		if (request.method === "POST") {
			const { url } = await request.json();

			const res = await fetch(url);
			const html = await res.text();

			const titleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
			const descMatch = html.match(/<meta property="og:description" content="(.*?)"/);
			const imageMatch = html.match(/<meta property="og:image" content="(.*?)"/);

			const card = {
				title: titleMatch ? titleMatch[1] : "No title",
				summary: descMatch ? descMatch[1] : "No summary available",
				image: imageMatch ? imageMatch[1] : null,
				url,
				date: new Date().toISOString(),
				tags: []
			};

			return new Response(JSON.stringify(card), {
				headers: { "Content-Type": "application/json" }
			});
		}

		return new Response("Send a POST request with a URL.");
	}
};
