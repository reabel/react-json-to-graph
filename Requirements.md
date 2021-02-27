Write a Web UI using a framework of your choice that renders a **visualization of a graph**.

The page should be split into **two sections**. The **first section** should be an input that accepts a **JSON payload** that is structured like:

```
{
	"vertices": [{
			"id": "n1",
			"label": "Node 1",
			"type": "node"
		},
		{
			"id": "n2",
			"label": "Node 2",
			"type": "node"
		},
		{
			"id": "a1",
			"label": "Alarm 1",
			"type": "alarm"
		}
	],
	"edges": [{
			"id": "e1",
			"label": "edge n1-n2",
			"type": "link",
			"source_id": "n1",
			"target_id": "n2"
		},
		{
			"id": "e2",
			"label": "edge n2-a1",
			"type": "link",
			"source_id": "n2",
			"target_id": "a1"
		}
	]
}
```

The **second section** should render a visualization of the payload from the first section. **Each vertex should be displayed by an icon** and **edges should be represented as lines between these**.

The visualization should be **updated to reflect the latest graph after changing the JSON**.

The solution should be made available as a **public GitHub repository** and should include instructions on how to build the source.
