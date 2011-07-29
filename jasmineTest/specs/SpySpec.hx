package jasmineTest.specs;
import jasmine.J;
import jasmine.Jasmine;
import jasmine.Spy;
import js.Lib;

class SpySpec {

	public function new() {
		J.describe("spy behavior", function() {
			
			J.it("should spy on a static method", function() {
				var spy = J.spyOn(Klass, "staticMethod");
				Klass.staticMethod();
				J.expect(spy).toHaveBeenCalled();
			});
			
			J.it("should spy on an instance method", function() {
				var obj = new Klass();
				var spy = J.spyOn(obj, "method");
				obj.method();
				J.expect(spy).toHaveBeenCalled();
			});
			
			J.it("should spy on a callback", function() {
				var spy = Jasmine.createSpy("007");
				new Klass().methodWithCallback(cast spy);
				J.expect(spy).toHaveBeenCalled();
			});

		});
	}

}

class Klass {
	
	public static function staticMethod() {
	}
	
	public function new();
	
	public function method() {
	}
	
	public function methodWithCallback( cb : Void -> Void ) {
		cb();
	}
	
}
