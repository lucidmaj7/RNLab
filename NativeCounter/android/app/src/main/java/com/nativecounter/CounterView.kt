package com.nativecounter


import android.view.LayoutInflater
import android.view.View
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactContext
import com.nativecounter.databinding.CounterViewBinding
import com.facebook.react.uimanager.events.RCTEventEmitter
class CounterView(val context: ReactContext): FrameLayout(context) {
    private val binding: CounterViewBinding

    init {
        val inflater = LayoutInflater.from(context)
        binding = CounterViewBinding.inflate(inflater, this, true)
        binding.button3.text = "+1"
        this.setupEvents()
      //  View.inflate(context, R.layout.counter_view, this)
    }
    fun setLeftButtonText(text: String) {
        binding.button3.text = text
    }

    fun setRightButtonText(text: String) {
        binding.button4.text = text
    }
    fun setValue (value: Int) {
        binding.textView.text = value.toString()
    }
    fun setupEvents(){
        val eventEmitter = context.getJSModule(RCTEventEmitter::class.java)
        binding.button3.setOnClickListener{
            eventEmitter.receiveEvent(id,"pressLeftButton", null)
        }
        binding.button4.setOnClickListener{
            eventEmitter.receiveEvent(id, "pressRightButton", null)
        }

    }
}