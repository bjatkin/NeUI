package main

type buttonCounterState struct {
	Count int
}

func (me *buttonCounterState) countUp() {
	me.Count++
}
