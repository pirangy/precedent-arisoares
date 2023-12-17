interface Tool {
    icon: string;
    title: string;
    description: string;
}

interface SmallToolListItemProps {
    tool: Tool;
}

export const SmallPersonListItem: React.FC<SmallToolListItemProps> = ({ tool }) => {
	const { icon, title, description } = tool;

	return (
		<><image> {icon} </image><h3>{title}</h3><p>{description}</p></>
	);
}