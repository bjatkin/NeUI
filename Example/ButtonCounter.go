package NeUI

type buttonCounter struct {
	Count int
}

func (me *buttonCounter) countUp() {
	me.Count++
}
