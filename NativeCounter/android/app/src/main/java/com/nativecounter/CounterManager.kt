package com.nativecounter

import android.view.LayoutInflater
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.nativecounter.databinding.CounterViewBinding
import com.facebook.react.common.MapBuilder
class CounterManager: SimpleViewManager<CounterView>() {

    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): CounterView {
        return CounterView(reactContext)
    }

    companion object {
        const val REACT_CLASS = "Counter"
    }

    @ReactProp(name="leftButtonText")
    fun setLeftButtonText(view: CounterView, text: String) {
       view.setLeftButtonText(text)
    }

    @ReactProp(name="rightButtonText")
    fun setRightButtonText(view: CounterView, text: String) {
        view.setRightButtonText(text)

    }
    @ReactProp(name="value")
    fun setValue(view: CounterView, value: Int) {
        view.setValue(value)
    }

    override fun getExportedCustomBubblingEventTypeConstants(): MutableMap<String, Any> {
        val builder = MapBuilder.builder<String, Any>()

        return builder
                .put("pressLeftButton", MapBuilder.of(
                        "phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onPressLeftButton")
                ))
                .put("pressRightButton", MapBuilder.of(
                        "phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onPressRightButton")
                )).build()
    }

}