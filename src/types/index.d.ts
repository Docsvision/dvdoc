public enum ChangeType {
	Draft, // 0, оно не будет приходить в ответе
	Fix, // 1
	Optimization, // 2
	Functional, // 3
	Lib, // 4
}

interface Children {
	id: number
	head: string
	icon: string
	model: boolean
	type: ChangeType
	children: Err[]
}

interface Err {
	id: string
	type: ChangeType
	title: string
	description: string
	detailed: string
}

interface Metadata {
	isPublic: boolean
	downloadLink?: string
	publishDate?: string
	bildId?: number
}

interface Version {
	id: number
	fileVersion: string
	groupId: number
	metadata: Metadata
	changes: Err[]
}

interface Myversion {
	id: number
	fileVersion: string
	groupId: number
	metadata: Metadata
	children: Children[]
}

interface Group {
	id: number
	title: string
	description?: string
	builds?: Version[]
	publishDate?: string
  }